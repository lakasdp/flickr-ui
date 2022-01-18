import React, { useEffect, useState } from 'react';
import getConfig from "next/config";

import axios from "axios";
const { publicRuntimeConfig } = getConfig();
const ENDPOINT = publicRuntimeConfig.RATHOS_ENDPOINT;

import Layout from "../components/layout/Layout";

import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import LoadingImage from '../components/LoadingImage';

export default function Home() {

  // Page Params
  const [inputTag, setInputTag] = useState("");
  const handleInputTag = (tag) => setInputTag(tag);

  const [tag, setTag] = useState("");
  const submitTag = (e) => {
    e.preventDefault();
    setTag(inputTag);
  };

  const [page, setPage] = useState(1);
  const handlePage = (page) => { 
    if (page !== 0 && page !== imageMetas.total) setPage(page)
  }

  // Fetch Data
  const [isLoading, setIsLoading] = useState(true);
  const [imageMetas, setImageMetas] = useState({});
  const [imageList, setImageList] = useState([]);

  const fetchImages = async () => {
    setIsLoading(true);
    const imgFetch = await axios.get(`${ENDPOINT}/pictures?page=${page}&tags=${tag}`)
                                .then(response => response.data)
                                .catch(error => console.error(error));
    setImageList(imgFetch.data); 
    setImageMetas(imgFetch.meta);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages()
  }, [tag, page])

  return (
    <Layout>
      <div className="rathos-homepage">

        <div className="container">

          <div className="page-search-wrapper">
            <div className="page-search-asset"></div>
            
            <form onSubmit={(e) => submitTag(e)}>
              <div className="search-input-wrapper">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search by tags here!" onInput={(val) => handleInputTag(val.target.value)}/>
                </div>

                <button className="btn btn-primary"></button>
              </div>

            </form>

          </div>

          { imageMetas && imageMetas.total > 0 ? <p className="showing-text">Showing Random Photos ({(16 * (page - 1) + 1)} - {16 * page} of {imageMetas.total})</p> : "" }

          <div className="page-images-wrapper">
            { 
              isLoading ?
                <LoadingImage /> 
                :
                imageMetas && imageMetas.total > 0 ? 
                  imageList.map((item, index) => 
                  <ImageCard key={index} index={index} title={item.title} url={item.url} author={item.ownername}/>
                  )
                  : 
                  <div className="empty-image">
                    <p className="empty-text">No image found :(</p>
                  </div>
            }
          </div>

          <div className="page-pagination-wrapper">
            <Pagination currentPage={page} totalPage={imageMetas.pages} changePage={(val) => handlePage(val)}/>
          </div>

        </div>
      </div>
    </Layout>
  )
}
