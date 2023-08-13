import useSort from './hooks/use-sort'
import Table from "./Table"
import { GoChevronDown, GoChevronUp, GoCode } from "react-icons/go";

function SortedTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons (label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoCode/>
      </div>
    )
  };

  if (sortOrder === null) {
    return (
      <div>
        <GoCode/>
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoChevronUp/>
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoChevronDown/>
      </div>
    )
  }
};

export default SortedTable;