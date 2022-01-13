import React from 'react'
import useFecth from '../libs/useFecth';
import useSWR from 'swr'
import './ProductCard.css'


export default function ProductCard() {
    const {data, loading, error} = useFecth('http://localhost:4000/api/products')
    // console.log(data);

    if (loading) return <h1>loading...</h1>

    if (error) return <h1>{error}</h1>

    
    const createCard = data.map(data=>{
        return (
            <div className='container'>
                <div className='card mt-4 img-container rounded'>
                    <div className="row g-0">
                        <div className="col-md-4 mx-auto">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner img-fluid rounded-start">
                                <div class="carousel-item active">
                                <img src={data.imgURL} class="d-block w-100 " alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={data.imgURL} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={data.imgURL} class="d-block w-100 " alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                            {/* <img src={data.imgURL} className="img-fluid rounded-start" /> */}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Nombre de Urbanizacion</small></p>
                                <h5 className="card-title">{data.salePrice} $</h5>
                                <p className="card-text"><small>{data.mts} | {data.description.bedrooms} Dormitorios</small></p>
                                <h6>{data.name}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    })
        
   
    return (
        <div>
            {createCard}    
        </div>
    )
}
