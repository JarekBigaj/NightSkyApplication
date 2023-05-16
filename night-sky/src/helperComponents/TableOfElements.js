import styled from "styled-components";


const Table = styled(({className,props,passedNameProperties}) => {
    const elements = props;
    const nameOfProps = passedNameProperties;
    return (
        <TableWrapper>
            <table className={className}>
                <thead>
                    <TableRow>
                        {nameOfProps.map((propsName)=>(
                            <th key={propsName}>{propsName}</th>
                        ))}
                    </TableRow>
                </thead>
                <tbody>
                    {
                        elements.map((element) => (
                            <TableRow key={element.id}>
                              {
                                Object.values(element).map((value)=>{
                                  if(value !== element.id){
                                    return <TableCell key={value+"cell"}>{value}</TableCell>
                                  }
                                })
                              }
                            </TableRow>
                        ))
                    }
                </tbody>
            </table>
        </TableWrapper>
        )
})`
  border-collapse: collapse;
  width: 50%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  border-radius: 0.25rem;
  overflow: hidden;
  
  th,
  td {
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid ${props => props.theme.colors.greyLighter};
  }

  thead {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  th {
    font-weight: 700;
    text-align: left;
    vertical-align: bottom;
    border-bottom: 2px solid ${props => props.theme.colors.greyLighter};
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.greyLighter};
  }

  tbody td {
    vertical-align: middle;
    border-bottom: 1px solid ${props => props.theme.colors.greyLighter};
  }
`;


const TableWrapper = styled.div`
  overflow-x: auto;
`;


const TableRow = styled.tr`
  &:hover {
    background-color: ${props => props.theme.colors.grey};
  }
`;

const TableCell = styled.td`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Table;