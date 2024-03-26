import React from 'react';
export default function Sql()
{
  return(
    <div>
    <React.StrictMode>
      <Display1 />
      <Display2/>
      <Display4/>
    </React.StrictMode>
  
  </div>
  );
  function Display1(){
    return(
      <div style={{backgroundColor:'grey',color:'black',fontFamily:'revert'}}>
        <center><h1>SQL Assessment</h1></center>
      </div>
    );
  }
  function Display2(){
    function displayres(event)
    {
      let count=0;
  
      let ans1=event.target.q1.value;
      if(ans1=="A.Relational")
      {
        count++
      }
      let ans2=event.target.q2.value;
      if(ans2=="B.Structured Query language")
      {
        count++
      }
      let ans3=event.target.q3.value;
      if(ans3=="B.Collection of data")
      {
        count++
      }
      let ans4=event.target.q4.value;
      if(ans4=="A.Data definition Language")
      {
        count++
      }
      let ans5=event.target.q5.value;
      if(ans5=="A.NO")
      {
        count++
      }
      let ans6=event.target.q6.value;
      if(ans6=="B.Unique")
      {
        count++
      }
      let ans7=event.target.q7.value;
      if(ans7=="A.Delete all data from table")
      {
        count++
      }
      let ans8=event.target.q8.value;
      if(ans8=="A.In tabuler form")
      {
        count++
      }
      let ans9=event.target.q9.value;
      if(ans9=="A.Full join")
      {
        count++
      }
      let ans10=event.target.q10.value;
      if(ans10=="B.Number")
      {
        count++
      }
  
  
      alert("Total marks: "+count) 
      
    }
    return(
      <div style={{backgroundColor:'grey',padding:'5px'}}>
        <h1>Answer  all the Questions</h1>
        <form onSubmit={displayres}>
        <Display3
        ques="1.MySQL is which type?"
        op1="A.Relational"
        op2="B.Non Relational"
        op3="C.Both"
        name="q1"
        />
        <Display3
        ques="2.Sql is ?"
        op1="A.Structured language"
        op2="B.Structured Query language"
        op3="C.scripted query laguage"
        name="q2"
        />
        <Display3
        ques="3.what Database?"
        op1="A.SQL"
        op2="B.Collection of data"
        op3="C.Object oriented"
        name="q3"
        />
        <Display3
        ques="4.Full form of ddl?"
        op1="A.Data definition Language"
        op2="B.database define language"
        op3="C.data language"
        name="q4"
        />
        <Display3
        ques="5.Is Encapsulation part of SQL?"
        op1="A.NO"
        op2="B.Yes"
        op3="C.Not Sure"
        name="q5"
        />
        <Display3
        ques="6.Which is a constraint in SQL?"
        op1="A.int"
        op2="B.Unique"
        op3="C.Truncate"
        name="q6"
        />
        <Display3
        ques="7.What truncate will do?"
        op1="A.Delete all data from table"
        op2="B.removes specific row data"
        op3="C.erase the table"
        name="q7"
        />
        <Display3
        ques="8.In MySql how data will be stored?"
        op1="A.In tabuler form"
        op2="B.key value pair"
        op3="C.none"
        name="q8"
        />
        <Display3
        ques="9.Which join will return all the rows from tables?"
        op1="A.Full join"
        op2="B.innner join"
        op3="C.leftjoin"
        name="q9"
        />
        <Display3
        ques="10.Which is invalid data type in mysql ?"
        op1="A.int"
        op2="B.Number"
        op3="C.varchar()"
        name="q10"
        />
        <br/><br/>
        <center>  <input type="submit" value="Get results"/> </center>
        </form>
  
      </div>
    );
  }
  function Display3(props){
    return(
      <div>
        <h2>{props.ques}</h2>
        <input type='radio' name={props.name} value={props.op1}/>
        <label>{props.op1}</label>
        <input type='radio' name={props.name} value={props.op2}/>
        <label>{props.op2}</label>
        <input type='radio' name={props.name} value={props.op3}/>
        <label>{props.op3}</label>
      </div>
    );
  }
  function Display4(){
    return(
      <div class='foot'>
       <center> <h4>All the Best</h4> </center>
      </div>
    );
  }
  
  
}