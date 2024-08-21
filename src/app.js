import React from "react";
function App(){
    const facultyMembers=[
        {
            name:'anurag singh',
            designation:'computer science',

            bio:'expert in artificial intelligence and machine learning',
        },
        {
            name:'vishal singh',
            designation:'mechanical engineering',

            bio:'robotics',
        },
        {
            name:'astha ojha',
            designation:'electronics engineering',

            bio:'expert in technology',
        },
        {
            name:'prashant gupta',
            designation:'electrical engineering',

            bio:'expert in renewable energy',
        },
        
    ];
    return(
        <div style={style.container}>
            <facultysection faculty={facultyMembers} />
        </div>
    );
}