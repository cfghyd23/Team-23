import React, {useState} from 'react'
import Fuse from 'fuse.js';

const characters = ['a', 'b']
// For Search
const searchKeys =  [
    'name',
    'company',
    'species'
]

const headings = [
    "Option 1",
    "Option 2",
    "Option 3"
]

export default function Dashboard() {
    const [searchRes, setSearchRes] = useState("");
    const searchRef = React.useRef();
    // search results
    const searchHandler = () => {
    // const results = fuse.search('bender');
        
    }
    
  return (
    <div>

<table className="table-auto">
  <thead>
    <tr>
    {headings.map(heading => <th>{heading}</th>)}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
