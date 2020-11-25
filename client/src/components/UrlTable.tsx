import { useMemo } from "react";
import DataTable, { IDataTableColumn } from "react-data-table-component";
import { UrlsConnection } from "../generated/graphql";

interface UrlTableProps {
  data: UrlsConnection | undefined | null;
}

const UrlTable: React.FC<UrlTableProps> = ({ data }) => {
  const columns = useMemo(
    () =>
      [
        {
          name: "Long URL",
          selector: "longUrl",
          sortable: true,
          cell: (row) => <a href={`${row.longUrl}`}>{row.longUrl}</a>,
        },
        {
          name: "Short Id",
          selector: "shortId",
          sortable: true,
          cell: (row) => (
            <a href={`http://localhost:5000/s/${row.shortId}`}>
              http://localhost:5000/s/{row.shortId}
            </a>
          ),
        },
      ] as IDataTableColumn[],
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
        title="URLs"
        columns={columns}
        data={data?.nodes ? data.nodes : []}
        paginationTotalRows={data?.totalCount}
        style={{ marginBottom: 20 }}
      />
    </div>
  );
};

export default UrlTable;
