import type { NextPage } from 'next'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { VscClose } from "react-icons/vsc"


const InsertStyle: string = "border border-gray-400 my-2"

const Home: NextPage = () => {
    const [fields, setFields] = useState([
        {
            name: '',
            value: ''
        }
    ])
    async function handleSubmit(event) {
        event.preventDefault()
        console.log(fields)
        try {
            await axios.post(event.target.webhook.value, {
                embeds: [{
                    title: event.target.title.value,
                    description: event.target.description.value,
                    fields: [...fields]
                }]
            })
            toast.success("Sended!")
        } catch {
            toast.error("Can't send")
        }
    }
    function handleChange(index, event) {
        fields[index][event.target.name] = event.target.value
        console.log(fields)
        setFields(fields)
    }
    function addField() {
        setFields([...fields, {
            name: '',
            value: ''
        }])
    }
    function rmField(index) {
        fields.splice(index, 1)
        setFields([...fields])
    }
    return (
        <div className="px-10">
            <h2 className="text-2xl">Send message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="webhook">Webhookurl:</label>
                <input type="url" className={InsertStyle} name="webhook" />
                <label htmlFor="title">Title:</label>
                <input type="text" className={InsertStyle} name="title" />
                <label htmlFor="description">Description</label>
                <input type="text" className={InsertStyle} name="description" />
                <div className="border rounded p-3">
                    <p className="text-2xl">Field</p>
                    {fields.map((field, index) => {
                        return (
                            <div key={index} className="flex">
                                <div className="flex">
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" className={`${InsertStyle} mx-2`}
                                        name="name" defaultValue={field.name} 
                                        onChange={(event) => handleChange(index, event)}/>
                                    <label htmlFor="value">Value: </label>
                                    <input type="text" className={`${InsertStyle} mx-2`}
                                        name="value" defaultValue={field.value}
                                        onChange={(event) => handleChange(index, event)}/>
                                </div>
                                <button onClick={(index) => rmField(index)} type="button">
                                    <VscClose />
                                </button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={addField}
                    className="my-2 mx-[15%] px-2 py-1 bg-green-400 border rounded"
                    type="button">Add field</button>
                <button className="my-2 mx-[15%] px-2 py-1 bg-indigo-500 border rounded">Send</button>
            </form>
        </div>
    )
}

export default Home
