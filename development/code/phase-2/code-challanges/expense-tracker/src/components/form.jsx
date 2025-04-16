import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="expensename" />
        <input type="text" placeholder="expensecategory" />
        <input type="text" placeholder="expensedescription" />
        <input type="text" placeholder="amount" />
        <input type="date" placeholder="" />
        <button className="submit">Submit</button>
      </form>
    </div> 
  )
}
