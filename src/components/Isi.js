import axios from "axios"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
// import $ from 'jquery'
// import InfiniteScroll from "react-infinite-scroll-component";

export const KontenKiri = () => {
    const [contenList, setContentList] = useState([])
    useEffect(() => {
        const GetContentList = async () => {
            const content = await axios.get('https://apps.tanamanpangan.pertanian.go.id/api/whatsapp/index.php?q=media_random')
            return content
        }
        GetContentList().then(response => {
            setContentList(response.data)
        })
    }, [])

    let a = 1
    let b = 2
    return (
        contenList.map((datas, i) => {
            if (a <= b && datas.TYPE === 'image') {
                a++;
                return (
                    <Card className="mt-3" key={i}>
                        <Card.Img variant="top" src={datas.NOTE} />
                        <Card.Body>
                            <Card.Title>Dokumentasi Foto Biosaka</Card.Title>
                            <Card.Text>{datas.MESSAGE}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            }
            return null
        })
    );
}

export const NewComponent = () => {
    const [newDivCount, setNewDivCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollable = (document.documentElement.scrollHeight - window.innerHeight) - 100;
            let scrolltop = window.scrollY

            if (Math.ceil(scrolltop) >= scrollable) {
                setNewDivCount(prevCount => prevCount + 1);
                console.log(scrollable)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [contenList, setContentList] = useState([])
    useEffect(() => {
        const GetContentList = async () => {
            const content = await axios.get('https://apps.tanamanpangan.pertanian.go.id/api/whatsapp/index.php?q=media_random')
            return content
        }
        GetContentList().then(response => {
            setContentList(response.data)
        })
    }, [])

    let a = 0
    let b = 2

    return (
        <div className="container">
            {Array.from({ length: newDivCount }, (_, index) => (
                contenList.map((datas, i) => {
                    if (a <= b && datas.TYPE === 'image') {
                        a++;
                        return (
                            <Card className="mt-3" key={index}>
                                <Card.Img variant="top" src={datas.NOTE} />
                                <Card.Body>
                                    <Card.Title>Dokumentasi Foto Biosaka</Card.Title>
                                    <Card.Text>{datas.MESSAGE}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                })
            ))}
        </div>
    );
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

    // window.addEventListener("scroll", () => {

    //     let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //     let scrolltop = window.scrollY

    //     if (Math.ceil(scrolltop) === scrollable) {
    //         let a = 0
    //         return (
    //             contenList.map((datas, i) => {
    //                 if (a <= 8 && datas.TYPE === 'image') {
    //                     a++;
    //                     return (
    //                        b = 16
    //                     );
    //                 }
    //                 return null
    //             })
    //         );
    //     }
    // })

       // const [data, setData] = useState(Array.from({length:20}))
    // const [hasMore, setHasMore] = useState(true)
    // const fetchMoreData = () =>{
    //     setTimeout(() =>{
    //         setData(data.concat(Array.from({length:5})))
    //     },500)
    // }
    // return(
    //     <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore}>

    //     {data.map((item,index)=>{
    //         return (
    //         // <div style={stylee} key={index}>This is array {index + 1}</div>
    //         console.log(data)
    //         )
    //     })}
    //     </InfiniteScroll>
    // )