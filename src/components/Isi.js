import axios from "axios"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';


export const KontenKiri = () => {
    const [contenList, setContentList] = useState([])
    useEffect(() => {
        const GetContentList = async () => {
            const content = await axios.get(process.env.REACT_APP_BASE_URL)
            return content
        }
        GetContentList().then(response => {
            setContentList(response.data)
        })
    }, [])

    let a = 0
    return (
        contenList.map((datas, i) => {

            if (a <= 8 && datas.TYPE === 'image') {
                a++
                return (
                    <Card className="mt-3" key={i}>
                        <Card.Img variant="top" src={datas.NOTE} />
                        <Card.Body>
                            <Card.Title>Dokumentasi Foto Biosaka</Card.Title>
                            <Card.Text>
                                {datas.MESSAGE}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
            return null
        })
    )
}

export const KontenKanan = () => {
    const [contenList, setContentList] = useState([])
    useEffect(() => {
        const GetContentList = async () => {
            const content = await axios.get(process.env.REACT_APP_BASE_URL)
            return content
        }
        GetContentList().then(response => {
            setContentList(response.data)
        })
    }, [])

    let b = 0
    return (
        contenList.map((datas, i) => {
            if (b <= 6 && datas.TYPE === 'video') {
                b++
                return (
                    <Card className="mt-3" key={i}>
                        <video controls loop="" type="video/mp4" className="cardvid">
                            <source src={datas.NOTE}></source>
                        </video>
                        <Card.Body>
                            <Card.Title>Dokumentasi Video Biosaka</Card.Title>
                            <Card.Text>
                                {datas.MESSAGE}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
            return null
        })
    )
}





// const Isi = () => {
//     // const [data, setDatas] = useState([])
//     // useEffect(() => {
//     //     axios.get('https://apps.tanamanpangan.pertanian.go.id/api/whatsapp/index.php?q=media_random')
//     //     .then(response => response.json)
//     //     .then(response => console.log(response))
//     // },[])
//     // let count = 0
//     // fetch('https://apps.tanamanpangan.pertanian.go.id/api/whatsapp/index.php?q=media_random')
//     //     .then(response => response.json())
//     //     .then(response => {
//     //         response.forEach(element => {
//     //             if (count < 5 && element.TYPE === 'image') {
//     //                 console.log(element)
//     //                 console.log(count)
//     //                 count++
//     //             }

//     //         });
//     //     })

// const slicedData = contenList.slice(0, 5)
    // let count = 0
    // return (
    //     contenList.forEach(element => {
    //     if (count < 5 && element.TYPE === 'image') {
    //             <div>
    //                 <img src={element.NOTE} alt="" />
    //             </div>
    //         count++
    //     }
    // })
    // )