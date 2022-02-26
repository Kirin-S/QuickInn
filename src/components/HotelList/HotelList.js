import Preview from "./Preview/Preview";
import SearchLocations from "./SearchLocations/SearchLocations";
import LeftArrowBtn from "../UI/ArrowBtns/LeftArrowBtn";
import RightArrowBtn from "../UI/ArrowBtns/RightArrowBtn";
import Loader from "../UI/Loader/Loader";
import styles from "./HotelList.module.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HotelList(props) {
  let [posts, setPosts] = useState([
    // {id: "987654", title: "Ban", price: "100", url: "localhost:3000/#", country: "SOME_COUNTRY", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    // {id: "654321", title: "Miss", price: "100", url: "localhost:3000/#", country: "England", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    // {id: "321987", title: "Hotel", price: "1000", url: "localhost:3000/#", country: "USA", city: "SOME_CITY", review: "10", review_word: "SUPER"},
  ]);

  const destID = useSelector((state) => state.destID);

  const [searchQuery, setSearchQuery] = useState('');  // Поиск
  const [isPostsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    setPostsLoading(true);

    const axios = require("axios").default;

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
      params: {
        locale: 'en-gb',
        order_by: 'popularity',
        filter_by_currency: 'AED',
        dest_id: destID,
        dest_type: 'city',
        checkin_date: '2022-07-23',
        checkout_date: '2022-07-24',
        adults_number: '2',
        room_number: '1',
        units: 'metric',
        children_ages: '5,0',
        page_number: props.pageNumber,
        categories_filter_ids: 'class::2,class::4,free_cancellation::1',
        children_number: '2',
        include_adjacency: 'true'
      },
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '8ff3fddc21mshbb4f6d5db856a07p1cbb3ejsn3fa5b0ac771f'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        let newPosts = [];

        for (let i = 0; i < response.data.result.length; i++) {
          const newPost = {
            id: response.data.result[i].hotel_id,
            title: response.data.result[i].hotel_name,
            picture: response.data.result[i].max_photo_url,
            price: response.data.result[i].price_breakdown.currency + " " + response.data.result[i].price_breakdown.all_inclusive_price,
            country: response.data.result[i].country_trans,
            city: response.data.result[i].city_trans,
            review: response.data.result[i].review_score,
            review_word: response.data.result[i].review_score_word
          };
          newPosts.push(newPost);
        };

        setPosts([...newPosts]);
        
        setPostsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [destID, props.pageNumber]);

  // Переключает страницу вперёд при клике на правую стрелку. Перемещает область просмотра вверх.  
  function nextPage() {
    props.setPageNumber(props.pageNumber + 1);

    document.documentElement.scrollTop = 0;
  }

  // Переключает страницу назад при клике на левую стрелку. Перемещает область просмотра вверх.
  function previousPage() {
    props.setPageNumber(props.pageNumber - 1);

    document.documentElement.scrollTop = 0;
  }

  return (
    <div>

      <SearchLocations
        value={searchQuery}
        setSearchQuery={setSearchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <div className={styles.hotels}>
        {
          isPostsLoading
          ?
            <div style={{position: "absolute", left: "30%"}}>
              <Loader />
            </div>
          :
            <div>
              {
                posts.map((post) => (
                  <Preview post={post} key={post.id} pageNumber={props.pageNumber} />
                ))
              }
              <div className={styles.pagesBtns}>
                {
                  props.pageNumber > 0
                  ?
                    <Link to={`/hotels/${props.pageNumber - 1}/`} onClick={previousPage}>
                      <LeftArrowBtn />
                    </Link>
                  :
                    null
                }
                <p>{props.pageNumber}</p>
                <Link to={`/hotels/${props.pageNumber + 1}/`} onClick={nextPage}>
                  <RightArrowBtn />
                </Link>
              </div>         
            </div>
        }
      </div>

    </div>
  );
}

export default HotelList;
