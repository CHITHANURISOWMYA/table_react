
// import ButtonComponent from "./components/button/class/buttoncomponent"
 import ButtonComponent from "./components/button/functional/buttoncomponent"
 import UnorderesList from "./components/list/unordereslist"
 import OrederedList from "./components/list/orderedlist";
import ListItems from "./components/list/list";
import TableComponent from "./components/table/tablecomponent";
import ImageLocal from "./components/image/image-local";
import Heading, { Tables } from "./components/heading/heading";
import NavBar from "./components/nav/nav";
import Nav, { Cards } from "./components/nav/navbar";
import ButtonComponent1, { ButtonComponent2 } from "./components/props/prop";
import Showdata from "./components/showdata/showdata";
import YoutubeButton from "./components/youtube-button/youtube-button";
import Courosel from "./components/courosel/courosel";
import CorosolComponent from "./components/courosel/courosel";
import Employee from "./components/list/list-map/list.map";
import TableComponent1 from "./components/table/table-class";
// import TableComponent from "./components/table/table-class";

 

function App() {

  function getday(day){
    switch(day){
      case 0:
        return "sunday";
      case 1:
        return "monday";
      case 2:
        return"tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return"friday";
      case 6:
        return "saturday";

    }}

 function greeting(Hours){
  let greeting
if(Hours>=0 && Hours<=11){
greeting="Good morning"
}
else if(Hours>=12 && Hours<16){
  greeting="Good Afternon"
}
else if(Hours>=16 && Hours<18){
  greeting="Good Evening"
}
else{greeting="good nigth"}

return greeting
 }


  return (
    <div>
        {/* <ButtonComponent/>
        <ButtonComponent/>
        <UnorderesList/>
        <OrederedList/>
        <ListItems/>
       <TableComponent/>
       <ImageLocal/>
       <Heading/>
       <NavBar/>
       <Nav/>
       <Cards/>
       <Tables/> */}

       {/* normal prop______________________________________________ */}

       <ImageLocal/>
       <ButtonComponent1 text="login" backgroundColor="green" />    <br/> <br/> 
       <ButtonComponent1 text="sign up" backgroundColor="red" color="black"/>
       <ButtonComponent1/>
       
<ButtonComponent2 buttonproperties={
        {
        text:"signup", 
        backgroundColor:"red",
        color:"black",
        width:"100px"
        }}
/>
<ButtonComponent2 buttonproperties={
  {
  text:"signup", 
  backgroundColor:"red",
  color:"black",
  width:"400px"
  }}/>


<Showdata date={getday(new Date().getDay())} greet={greeting(new Date().getHours())}  />    

<YoutubeButton/>
<Courosel/>

<CorosolComponent/>
<Employee/>
<TableComponent1/>


</div>
);
}
export default App;
