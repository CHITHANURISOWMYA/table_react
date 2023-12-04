import { Component } from "react";
import TableHeader from "./table-header";
import TableData from "./tabledata";
import sty from "../heading/heading.module.css"

class TableComponent1 extends Component{
    render(){
        return(
          <div className={sty.sowmya}>
              <table >
                <tr className={sty.sowmya} ><TableHeader className={sty.sowmya}/></tr>
                <tr className={sty.sowmya}><TableData className={sty.sowmya}/></tr>
                <tr className={sty.sowmya}><TableData/></tr>
            </table>
          </div>
        )
    }
}
export default TableComponent1