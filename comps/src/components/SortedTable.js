import { useState } from "react";
import Table from "./Table"
import { GoChevronDown, GoChevronUp, GoCode } from "react-icons/go";

function SortedTable (props) {
  const [ sortOrder, setSortOrder ] = useState(null);
  const [ sortBy, setSortBy ] = useState(null);

  // creando el orden ascendente-descendente
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    };

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    };
  };

  const { config, data } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => 
        <th className="cursor-pointer hover:bg-blue-100" onClick={() => handleClick(column.label)}>
          <div className="flex item-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
    };
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const {sortValue} = config.find(column => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />
};

function getIcons (label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div> <GoCode/> </div>
  };

  if (sortOrder === null) {
    return <div> <GoCode/> </div>;
  } else if (sortOrder === 'asc') {
    return <div> <GoChevronUp/> </div>
  } else if (sortOrder === 'desc') {
    return <div> <GoChevronDown/> </div>
  }
};

export default SortedTable