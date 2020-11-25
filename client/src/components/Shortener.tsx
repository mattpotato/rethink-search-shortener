import { gql } from "@apollo/client";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  UrlsConnection,
  useAllUrlsQuery,
  useShortenMutation,
} from "../generated/graphql";
import { StyledButton } from "./StyledButton";
import { StyledInput } from "./StyledInput";
import UrlTable from "./UrlTable";
import { Wrapper } from "./Wrapper";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [shorten, { data, error }] = useShortenMutation({
    update: (cache, { data: resultData }) => {
      if (resultData?.shorten) {
        // merge new url to existing in cache
        const newRef = {
          __typename: resultData.shorten.url?.__typename,
          shortId: resultData.shorten?.url?.shortId,
          longUrl: resultData.shorten?.url?.longUrl,
        };
        cache.modify({
          fields: {
            allUrls(existingUrlsRefs = [], { readField }): any[] {
              const newUrlRef = cache.writeFragment({
                data: newRef,
                id: newRef.shortId,
                fragment: gql`
                  fragment NewURL on Url {
                    nodes {
                      shortId
                      longUrl
                    }
                  }
                `,
              });

              return {
                ...existingUrlsRefs,
                nodes: [newUrlRef, ...existingUrlsRefs.nodes],
              };
            },
          },
        });
      }
    },
  });
  const { data: urlsData } = useAllUrlsQuery();

  const handleSubmit = async () => {
    // Generate short id and submit
    await shorten({
      variables: {
        shortId: nanoid().substring(0, 7),
        longUrl: url,
      },
    });
    setUrl("");
  };

  return (
    <div>
      <Wrapper>
        <h1>Shortener</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <StyledInput
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a url: http://google.com"
          />
          <StyledButton onClick={handleSubmit}>Shorten</StyledButton>
        </form>
        <div>
          {data?.shorten ? (
            <div>
              <p>Shortened URL</p>
              <a href={`http://localhost:5000/s/${data.shorten.url?.shortId}`}>
                http://localhost:5000/s/{data.shorten.url?.shortId}
              </a>
            </div>
          ) : null}
          {error && <div>Error: Please Try Again </div>}
        </div>
      </Wrapper>
      <UrlTable data={urlsData?.allUrls as UrlsConnection} />
    </div>
  );
};

export default Shortener;
