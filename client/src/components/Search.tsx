import { useState } from "react";
import {
  PeopleConnection,
  SearchQuery,
  useSearchQuery,
} from "../generated/graphql";
import Table from "./Table";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, fetchMore } = useSearchQuery({
    variables: {
      query: searchValue,
      first: 10,
      after: null,
    },
    skip: searchValue === "",
  });

  const handleLoadMore = () => {
    if (data?.search?.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          query: searchValue,
          first: 10,
          after: data.search?.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }): SearchQuery => {
          const newNodes = fetchMoreResult?.search?.nodes || [];
          const pageInfo = fetchMoreResult?.search?.pageInfo;

          return newNodes.length
            ? {
                search: {
                  __typename: previousResult.search?.__typename,
                  nodes: [...previousResult.search?.nodes!, ...newNodes],
                  totalCount: previousResult.search?.totalCount!,
                  pageInfo: pageInfo!,
                },
              }
            : previousResult;
        },
      });
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by Name, Job Title, or Country..."
          style={{
            width: 500,
            borderRadius: 5,
            padding: "5px",
            fontSize: "14pt",
          }}
        />
      </div>
      {data?.search ? <div> Got {data.search.totalCount} results</div> : null}
      <Table
        data={data?.search as PeopleConnection}
        loadMore={handleLoadMore}
      />
    </div>
  );
};

export default Search;
