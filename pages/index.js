import React from 'react';
import Image from 'next/image';

import Layout from "../components/layout/Layout";

import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";


export default function Home() {

  const imageList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  // const imageList = [1,2,3];
  // const imageList = [];

  return (
    <Layout>
      <div className="rathos-homepage">

        <div className="container">

          <div className="page-search-wrapper">
            <div className="page-search-asset"></div>
            
            <div className="search-input-wrapper">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search by tags here!"/>
              </div>

              <button className="btn btn-primary"></button>
            </div>

          </div>

          <div className="page-images-wrapper">
            { imageList && imageList.length > 0 ? 
              imageList.map(item => <ImageCard />)
              : 
              <div className="empty-image">
                <p className="empty-text">No image found :(</p>
              </div>
            }
          </div>

          <div className="page-pagination-wrapper">
            <Pagination />
          </div>

        </div>
      </div>
    </Layout>
  )
}
