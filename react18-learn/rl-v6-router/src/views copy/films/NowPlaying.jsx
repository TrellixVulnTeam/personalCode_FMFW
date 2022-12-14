import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmItem from './FileItem'

export default function NowPlaying() {
    
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5199589',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16558863921792667809742849","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res)
            setList(res.data.data.films)
        })
    },[])


    return (
        <div>
            <ul>
                {
                    list.map((item) => {
                       return <FilmItem key={ item.filmId } { ...item }></FilmItem>
                    })
                }
            </ul>
        </div>
    )
}
