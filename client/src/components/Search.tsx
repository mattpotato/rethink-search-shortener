import React, { useState } from "react";
import {
  PeopleConnection,
  SearchQuery,
  useSearchQuery,
} from "../generated/graphql";
import { StyledInput } from "./StyledInput";
import Table from "./Table";
import { Wrapper } from "./Wrapper";

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
      <Wrapper>
        <h1>Search</h1>
        <StyledInput
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by Name, Job Title, or Country..."
        />
        {data?.search ? <div> Got {data.search.totalCount} results</div> : null}
      </Wrapper>
      <Table
        data={data?.search as PeopleConnection}
        loadMore={handleLoadMore}
      />
    </div>
  );
};

export default Search;
