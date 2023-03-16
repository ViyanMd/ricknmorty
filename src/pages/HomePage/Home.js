import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/mainlogo.svg";
import CharExerpt from "../../components/charExerpt/CharExerpt";
import Pagination from "../../components/paginate/Paginate";
import SearchField from "../../components/SearchField/SearchField";
import { getFromStorage } from "../../utils/LocalStorage";
import sortByName from "../../utils/SortArray";
import "./Home.css";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [pageNum, setPageNum] = useState(1);

    const API_URL = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error: status ${response.status}`);
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [API_URL])


    useEffect(() => {
        setSearch(getFromStorage("search"));
    }, [search]);

    let content = [];

    if (data && !search) {
        sortByName(data.results);
        content = data.results.map((item) => (
            <Link id={item.id} to={`/character/${item.id}`}>
                <CharExerpt
                    name={item.name}
                    species={item.species}
                    imgURL={item.image}
                />
            </Link>
        ))
    };
    
    if(data && search) {
        sortByName(data.results);
        content = data.results
            .filter((item) => item.name.includes(search))
            .map((found) => (
                <Link id={found.id} to={`/character/${found.id}`}>
                    <CharExerpt
                        name={found.name}
                        species={found.species}
                        imgURL={found.image}
                    />
                </Link>
            ))
    }

    return (
        <main className="main">
            <Logo />
            <SearchField setSearch={setSearch} search={search} setPageNum={setPageNum} />
            <div className="main_content">
                {loading && <div>A moment please...</div>}
                {error && (
                    <div>{`Error: ${error}`}</div>
                )}
                {data && content}
            </div>
            {data && <Pagination pageNum={pageNum} setPageNum={setPageNum} info={data.info}/>}
        </main>
    );
}
