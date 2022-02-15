import Preview from "./Preview/Preview";
import SearchLocations from "./SearchLocations/SearchLocations";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./PostList.module.css";

function HotelList(props) {
  let [posts, setPosts] = useState([
    // {id: "987654", title: "Ban", price: "100", url: "localhost:3000/#", country: "SOME_COUNTRY", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    // {id: "654321", title: "Miss", price: "100", url: "localhost:3000/#", country: "England", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    // {id: "321987", title: "Hotel", price: "1000", url: "localhost:3000/#", country: "USA", city: "SOME_CITY", review: "10", review_word: "SUPER"},
  ]);

  const [searchQuery, setSearchQuery] = useState('');  // Поиск
  const [destType, setDestType] = useState('-553173'); // Дефолт ID Праги

  useEffect(() => {
    const axios = require("axios").default;

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
      params: {
        locale: 'en-gb',
        order_by: 'popularity',
        filter_by_currency: 'AED',
        dest_id: destType,
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
        'x-rapidapi-key': 'a853eeda66msh7bbaee4eb0fcb86p15483bjsn777e2843d937'
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
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [destType, props.pageNumber]);

  function nextPage() {
    props.setPageNumber(props.pageNumber + 1)
  }

  function previousPage() {
    if (props.pageNumber === 0) {
      props.setPageNumber(0);
    }
    props.setPageNumber(props.pageNumber - 1)
  }

  return (
    <div>

      <SearchLocations
        value={searchQuery}
        setSearchQuery={setSearchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        setDestType={setDestType}
      />

      <div className={styles.hotels}>
        {
          posts.length > 0
          ?
            posts.map((post) => (
              <Preview post={post} key={post.id} pageNumber={props.pageNumber} />
            ))
          :
            <p style={{fontSize: "28px"}}>По вашему запросу отелей не найдено.</p>
        }

        <div>
          <Link to={`/hotels/${props.pageNumber + 1}/`}><button onClick={nextPage}>Следующая страница</button></Link>
          <p>{props.pageNumber}</p>
          <Link to={`/hotels/${props.pageNumber-1}/`}><button onClick={previousPage}>Предыдущая страница</button></Link>
        </div>
      </div>

    </div>
  );
}

export default HotelList;
