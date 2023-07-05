import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api"

export const Context = createContext()

const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState(false)
    const [seclectCategories, setSelectCategories] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <>

        </>
    )

}

