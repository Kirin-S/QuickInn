import Preview from "./Preview/Preview";
import React, { useState } from "react";

function PostList() {
  let [posts, setPosts] = useState([
    {id: 1, title: "BAN", price: "Hello", url: "localhost:3000/#", country: "SOME_COUNTRY", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    {id: 2, title: "MISS", price: "World", url: "localhost:3000/#", country: "SOME_COUNTRY", city: "SOME_CITY", review: "10", review_word: "SUPER"},
    {id: 3, title: "HOTEL", price: "Of Hotels", url: "localhost:3000/#", country: "SOME_COUNTRY", city: "SOME_CITY", review: "10", review_word: "SUPER"},
  ]);

  // const axios = require("axios").default;

  // const options = {
  //   method: 'GET',
  //   url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
  //   params: {
  //     locale: 'en-gb',
  //     order_by: 'popularity',
  //     filter_by_currency: 'AED',
  //     dest_id: '-553173',
  //     dest_type: 'city',
  //     checkin_date: '2022-07-23',
  //     checkout_date: '2022-07-24',
  //     adults_number: '2',
  //     room_number: '1',
  //     units: 'metric',
  //     children_ages: '5,0',
  //     page_number: '0',
  //     categories_filter_ids: 'class::2,class::4,free_cancellation::1',
  //     children_number: '2',
  //     include_adjacency: 'true'
  //   },
  //   headers: {
  //     'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //     'x-rapidapi-key': 'c8366f1f29mshd460b0aa32692f7p1371b8jsn0ea87e1f4436'
  //   }
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data.result);

  //     let newPosts = [];

  //     for (let i = 0; i < response.data.result.length; i++) {
  //       const newPost = {
  //         id: response.data.result[i].id,
  //         title: response.data.result[i].hotel_name,
  //         picture: response.data.result[i].max_photo_url,
  //         price: response.data.result[i].price_breakdown.currency + " " + response.data.result[i].price_breakdown.all_inclusive_price,
  //         url: response.data.result[i].url,
  //         country: response.data.result[i].country_trans,
  //         city: response.data.result[i].city_trans,
  //         review: response.data.result[i].review_score,
  //         review_word: response.data.result[i].review_score_word
  //       };
  //       newPosts.push(newPost);
  //     };

  //     setPosts([...newPosts]);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <div>
      {posts.map((post) => (
        <Preview post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
