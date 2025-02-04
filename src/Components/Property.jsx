import React from "react";
import { useState, useEffect } from "react";

export default function Property(){
    const [List, setList]= useState([]);

    useEffect(()=>{
        fetch( "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json")
      .then(response => response.json())
      .then(data => {
        setList(data)
      })
      .catch(error => {
        console.log(error)
      })
      } ,[])
console.log(List)
    return(
        <div>
            <div className="lg:">

            </div>
            <h1 className="text-blue-300">
                Hello red
            </h1>
        </div>
    )
}