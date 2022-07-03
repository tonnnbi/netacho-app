import React, { useState, useEffect } from 'react'; 
import ReactModal from 'react-modal';
import words from '../Content/words';
import { BiSearchAlt } from 'react-icons/bi'; 

const WordRendering = () => {

    //配列のstate
    const [stateWords, setStateWords]= useState(words); 

    //フォームのstate管理
    const [word, setWord] = useState(''); 
    const wordHandleChange = (e) => {
        e.preventDefault(); 
        setWord(e.target.value); 
    }
    const [by, setBy] = useState(''); 
    const byHandleChange = (e) => {
        e.preventDefault();
        setBy(e.target.value);
    }
    const [information, setInformation] = useState(''); 
    const  informationHandleChange = (e) => {
        e.preventDefault();
        setInformation(e.target.value);
    }


    //モーダル管理
    const [modalOpen, setModalOpen] = useState(false);
    const OpenModal = (e) => {
        e.preventDefault(); 
        setModalOpen(true);
    }
    const CloseModal = (e) => {
        e.preventDefault(); 
        setModalOpen(false);
    }


    const FinishModal = ({ word, by, information }) => {
        const addWord = 
            {
                id : words.length + 1, 
                word : word, 
                by : by, 
                information : information 
            }
        ; 
        stateWords.concat(addWord); 
    }

    //submit用
    const handleSubmit = () => {
        alert("Submit!!!");
        FinishModal(); 
        setModalOpen(false); 
    }


    return ( 
       <>
            <div className='w-full block flex-grow lg:flex lg:justify-center lg:w-auto my-2 items-center'>
                <div className='text-teal-500 text-2xl'><BiSearchAlt /></div>
                <div>
                    <input
                        type="text"
                        className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-gray-300 mt-4 lg:mt-0 mr-2 items-center bg-gray-200'
                        placeholder="ワードを探す..."
                    />
                </div>
                <button 
                    className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent bg-teal-500 hover:bg-teal-600'
                    onClick={OpenModal}
                >
                    ワードを追加
                </button>

                <ReactModal isOpen={modalOpen} >
                    <div className="flex justify-center items-center">
                        <div className="lg:w-2/5 md:w-1/2 w-2/3">
                            <form className="bg-pink-100 p-10 rounded-lg shadow-base min-w-full" onSubmit={handleSubmit}>
                                <button className='bg-gray-200 hover:bg-gray-300 rounded text-sm py-1 px-2 my-2' onClick={CloseModal}>close</button>
                                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">ワードを追加</h1>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="username">ワード</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="ワードを記入..." onChange={wordHandleChange}/>
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="email">誰の</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="by" id="by" placeholder="誰の..." onChange={byHandleChange}/>
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="confirm">補足情報</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="補足情報..." onChange={informationHandleChange}/>
                                </div>
                                <button type="submit" className="w-full mt-6 bg-teal-500 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans" onClick={handleSubmit}>追加</button>
                            </form>
                        </div>
                    </div>
                </ReactModal> 

            </div>
        
            <table className="table-auto border-separate border-2 border-teal-500 mt-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">WORD</th>
                        <th className="px-4 py-2">BY</th>
                        <th className="px-4 py-2">INFORMATION</th>
                    </tr>
                </thead>

                <tbody>
                    {stateWords.map((data) =>
                        <tr key={data.id}>
                            <td className='border px-4 py-2'>{data.id}</td>
                            <td className='border px-4 py-2 underline hover:font-bold'>{data.word}</td>
                            <td className='border px-4 py-2 underline hover:font-bold'>{data.by}</td>
                            <td className='border px-4 py-2'>{data.information}</td>
                        </tr>
                    )}
                </tbody>
            </table>
       </>
        
    )
}

export default WordRendering; 