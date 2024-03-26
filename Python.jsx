import React from 'react';
  
export default function Python()
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
        <center><h1>Python Assessment</h1></center>
      </div>
    );
  }
  function Display2(){
    function displayres(event)
    {
      let count=0;
  
      let ans1=event.target.q1.value;
      if(ans1=="A.Dynamically typed")
      {
        count++
      }
      let ans2=event.target.q2.value;
      if(ans2=="C.all")
      {
        count++
      }
      let ans3=event.target.q3.value;
      if(ans3=="C.list")
      {
        count++
      }
      let ans4=event.target.q4.value;
      if(ans4=="A.Yes")
      {
        count++
      }
      let ans5=event.target.q5.value;
      if(ans5=="B.provides security for data")
      {
        count++
      }
      let ans6=event.target.q6.value;
      if(ans6=="A.one name many forms")
      {
        count++
      }
      let ans7=event.target.q7.value;
      if(ans7=="A.hides unnessesary data")
      {
        count++
      }
      let ans8=event.target.q8.value;
      if(ans8=="B.child inherited by the parent class")
      {
        count++
      }
      let ans9=event.target.q9.value;
      if(ans9=="C. A and B")
      {
        count++
      }
      let ans10=event.target.q10.value;
      if(ans10=="C.interface")
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
        ques="1.Python is an?"
        op1="A.Dynamically typed"
        op2="B.Statically typed"
        op3="C.none"
        name="q1"
        />
        <Display3
        ques="2.Style of Python programming ?"
        op1="A.scripting"
        op2="B.object oriented"
        op3="C.all"
        name="q2"
        />
        <Display3
        ques="3.Which is advance dtatype in Python?"
        op1="A.int"
        op2="B.String"
        op3="C.list"
        name="q3"
        />
        <Display3
        ques="4.can boolean perfom typecasting?"
        op1="A.Yes"
        op2="B.No"
        op3="C.Cannot tell"
        name="q4"
        />
        <Display3
        ques="5.What Encapsulation does?"
        op1="A.use private key word"
        op2="B.provides security for data"
        op3="C.one name many forms"
        name="q5"
        />
        <Display3
        ques="6.Polymorphism states that?"
        op1="A.one name many forms"
        op2="B.use setters and getters"
        op3="C.pure Abtstraction"
        name="q6"
        />
        <Display3
        ques="7.What is ment by Abstraction"
        op1="A.hides unnessesary data"
        op2="B.pure Abtstraction"
        op3="C.use private key word"
        name="q7"
        />
        <Display3
        ques="8.single inheritance is?"
        op1="A.parent and child classes"
        op2="B.child inherited by the parent class"
        op3="C.single parent and single child"
        name="q8"
        />
        <Display3
        ques="9.which is oop concept?"
        op1="A.Abstraction"
        op2="B.Inheritance"
        op3="C. A and B"
        name="q9"
        />
        <Display3
        ques="10. In javaMultiple inheritance is supported by using ?"
        op1="A.Abstraction"
        op2="B.class"
        op3="C.interface"
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