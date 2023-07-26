import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
        image: require("../pictures/pasta-la-vista.jpg"), 
        caption:"Caption",
        description:"Description Here"
    },
    {
        image:require("../pictures/cherry_blossoms.jpg"), 
        caption:"Caption",
        description:"Description Here"  
    },
    {
        image:require("../pictures/get-degree.png"), 
        caption:"Caption",
        description:"Description Here"
    } 
]

export default function SizeGuide(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='sizeguide-body'>
            {/* All content with table and carosel will be here */}
            <div id = 'sizeguide-content'>
                {/* Size Guide Header */}
                <h1 id='sizeguide-header'> Size Guide </h1>
                {/* Table location */}
                <table id='sizeguide-table'>
                    <tr class='sizeguide-table-child'>
                        <th  class='sizeguide-table-child'> Measurement</th>
                        <th class='sizeguide-table-child'> S </th>
                        <th class='sizeguide-table-child'> M </th>
                        <th> L </th>
                    </tr>
                    <tr>
                        <td  class='sizeguide-table-child'>Body Length from Hips</td>
                        <td class='sizeguide-table-child'> 28 </td>
                        <td class='sizeguide-table-child'> 29 </td>
                        <td> 30 </td>
                    </tr>
                    <tr class='sizeguide-table-child'>
                        <td class='sizeguide-table-child'>Chest 1" Below Armhole</td>
                        <td class='sizeguide-table-child'> 20 </td>
                        <td class='sizeguide-table-child'> 22 </td>
                        <td> 24 </td>
                    </tr>
                    <tr class='sizeguide-table-child'> 
                        <td class='sizeguide-table-child'>Sleeve Length From Center Back</td>
                        <td class='sizeguide-table-child'> 34.5 </td>
                        <td class='sizeguide-table-child'> 35.5 </td>
                        <td class='sizeguide-table-child'> 36.5 </td>
                    </tr>
                </table>

                {/* Carousel location */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                    <Carousel.Item key={i}>        
                    <img
                    className="d-block w-100"
                    src={slide.image}
                    alt="slider image"
                    />
                    <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    {/* <p>{slide.description}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                    )
                })}
                </Carousel>

                
            </div>
        </div>
    )
}