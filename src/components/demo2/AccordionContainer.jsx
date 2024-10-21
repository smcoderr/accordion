import React,{ useState} from 'react'
import GetAccordiontData from '../../accordionData'
import AccordionItem from './AccordionItem'

const AccordionContainer = () => {
    const [openId, setOpenId] = useState("");


    const data = GetAccordiontData()
    const openIdHandler = (id) => {
        setOpenId(id)
    }
  return (
    <div className='accordion-container'>
        {
            data?.map((accordionItemData,index)=> {
                return <AccordionItem key={index} openIdHandler={openIdHandler} openId={openId} {...accordionItemData}/>
            })
        }
    </div>
  )
}

export default AccordionContainer;