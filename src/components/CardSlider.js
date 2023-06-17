// import gambar1 from "../assets/img/gambar1.jpg"
// import gambar2 from "../assets/img/gambar2.jpg"
// import gambar3 from "../assets/img/gambar3.jpg"
// import gambar4 from "../assets/img/gambar5.jpg"
import { useState, useEffect } from "react"
import axios from "axios"

const CardSlider = () => {

    const [sliderrr, setSlider] = useState([])
    useEffect(() => {
        const GetSlider = async () => {
            const slider = await axios.get('https://apps.tanamanpangan.pertanian.go.id/api/whatsapp/index.php?q=media_latest', {
                params: {
                    sort: 10,
                },
            })
            return slider
        }
        GetSlider().then(response => {
            setSlider(response.data)
        })
  
    }, [])

    const reversedSlider = sliderrr.slice().reverse();
    let a = 0

    return (
        reversedSlider.map((datas, i) => {
            if (a < 150 && datas.TYPE === "image") {
                a++
                return (
                            <div className="slideee" key={i}>
                                <img src={datas.NOTE} alt='' className="imgslide" />
                            </div>       
                       
                )
            }
            return null
        })
    )
    // return (
    //     <div className="slider">
    //            <h1 className="judul">MEDIA TERBARU</h1>
    //         <div className="slide-track">
    //             <div className="slideee">
    //                 <img src={gambar1} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar2} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar3} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar4} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar1} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar2} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar3} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar4} alt='' className="imgslide" />
    //             </div>
    //             <div className="slideee">
    //                 <img src={gambar2} alt='' className="imgslide" />
    //             </div>
    //         </div>
    //     </div>

    // )
}
export default CardSlider