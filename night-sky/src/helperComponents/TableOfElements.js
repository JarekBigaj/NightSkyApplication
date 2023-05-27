import { useNavigate} from "react-router-dom";
import styled from "styled-components";


const Table = styled(({className,props,passedNameProperties,to,title}) => {
    const navigate = useNavigate();
    const elements = props;
    const nameOfProps = passedNameProperties;
    return (
        <TableWrapper>
            <table className={className}>
              <caption>
                Table of {title}
              </caption>
                <thead>
                    <tr>
                        {nameOfProps.map((propsName)=>(
                            <th key={propsName}>{propsName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        elements.map((element) =>
                         (
                            <tr key={element.id} onClick={()=>{
                              navigate(`${to}?id=${element.id}`)
                            }}>
                              {
                                Object.entries(element).map(([key,value])=>{
                                  if(value !== element.id){
                                    return <td data-cell={key} key={value+"cell"}>{value}</td>
                                  }
                                  return null;
                                })
                              }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </TableWrapper>
        )
})`
  width:100%;
  border-collapse:collapse;
  background-color:#323232;
  margin-top:1.5rem;

  caption,
  th,
  td {
    padding: 1rem;
  }

  caption,
  th {
    text-align: left;
  }

  caption {
    background: hsl(0 0% 0%);
    font-size: 1,5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  th {
    background: hsl(0 0% 0% / 0.5);
  }

  tr:nth-of-type(2n){
    background: hsl(0 0% 0% /0.1);

  }

  @media (max-width: 650px) {
    th{
      display:none;
    }
    td{
      display:grid;
      grid-template-columns: 15ch auto;
      gap:0.5rem;
      padding: 0.5rem 1rem;
    }

    td:first-child{
      padding-top:1rem;
    }

    td:last-child{
      padding-bottom:1rem;
    }

    td::before{
      content: attr(data-cell) ": ";
      font-weight:700;
      text-transforme: capitalize;
      
    }

  }
  
  
`;


const TableWrapper = styled.div`
  width: min(900px, 100% - 3rem);
  margin-inline: auto;
  color:white;
  
`;


export default Table;