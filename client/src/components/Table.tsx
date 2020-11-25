import { useMemo } from "react";
import DataTable from "react-data-table-component";
import { PeopleConnection } from "../generated/graphql";
import { StyledButton } from "./StyledButton";

interface TableProps {
  data: PeopleConnection | undefined | null;
  loadMore: Function;
}

const Table: React.FC<TableProps> = ({ data, loadMore }) => {
  const columns = useMemo(
    () => [
      {
        name: "First Name",
        selector: "firstName",
        sortable: true,
      },
      {
        name: "Last Name",
        selector: "lastName",
        sortable: true,
      },
      {
        name: "Job Title",
        selector: "jobTitle",
        sortable: true,
      },
      {
        name: "Country",
        selector: "country",
        sortable: true,
      },
      {
        name: "Email",
        selector: "email",
        sortable: true,
      },
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DataTable
        title="People"
        columns={columns}
        data={data?.nodes ? data.nodes : []}
        paginationTotalRows={data?.totalCount}
        style={{ marginBottom: 20 }}
      />
      <StyledButton
        onClick={() => loadMore()}
        style={{ display: data?.pageInfo.hasNextPage ? undefined : "none" }}
      >
        Load More
      </StyledButton>
    </div>
  );
};

export default Table;
