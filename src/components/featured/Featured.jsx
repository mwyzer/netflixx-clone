import { InfoOutlined, PlayArrowOutlined } from '@mui/icons-material';
import React from 'react'
import './featured.scss';

const Featured = ({ type }) => {
    return (
        <div className="featured">
            (type && (
            <div className='category'>
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre id=" genre>
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
            ))
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="info">
                <img
                    src=""
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga voluptate provident dolorem praesentium repudiandae neque pariatur accusantium distinctio nemo, quod ullam laudantium ipsam quo perspiciatis consequuntur non ducimus iusto.
                    Dolor deserunt veritatis, tempora nam error quo, quis eos excepturi eaque aperiam natus laboriosam laudantium sed veniam amet enim accusamus consequuntur consequatur totam quibusdam labore fuga quidem itaque? Veritatis, voluptatibus?
                    In atque numquam aspernatur, earum consequuntur neque veritatis, illo architecto unde obcaecati tempore accusamus quaerat! Deleniti non veniam fugiat voluptatem vitae nemo eum quia consectetur. Illum recusandae cumque quisquam aperiam!
                    Quaerat, quos illum! Facere consequuntur animi sit neque repudiandae sequi harum maiores. Voluptas totam maxime libero, unde minus architecto temporibus molestias facilis obcaecati. Hic, incidunt. Excepturi commodi ea pariatur illo!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowOutlined />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Featured
