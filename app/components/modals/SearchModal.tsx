'use client';

import Modal from "./Modal";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SearchModal = () => {
    let content = (<></>);
    const searchModal = useSearchModal();
    const [numGuests, setNumGuests] = useState<string>('1');
    const [numBedrooms, setNumBedrooms] = useState<string>('0');
    const [country, setCountry] = useState<SelectCountryValue>();
    const [numBathrooms, setNumBathrooms] = useState<string>('0');
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    //

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''
        }

        searchModal.setQuery(newSearchQuery);
        searchModal.close();
    }

    //set date range

    const _setDateRange = (selection: Range) => {
        if (searchModal.step === 'checkin') {
            searchModal.open('checkout');
        } else if (searchModal.step === 'checkout') {
            searchModal.open('details');
        }

        setDateRange(selection);
    }


    //
    //contents

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Dónde quieres ir?</h2>

            <SelectCountry
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="Checar fecha -->"
                    onClick={() => searchModal.open('checkin')}
                />
            </div>
        </>
    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">Cuándo quieres realizar el chequeo?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- Location"
                    onClick={() => searchModal.open('location')}
                />
                <CustomButton
                    label="Checar fecha salida -->"
                    onClick={() => searchModal.open('checkout')}
                />
            </div>
        </>
    )

    
    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">Cuándo quieres realizar el checkout?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- check in date"
                    onClick={() => searchModal.open('checkin')}
                />
                <CustomButton
                    label="Details ->"
                    onClick={() => searchModal.open('details')}
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Detalles</h2>

            <div className="space-y-4">
                <div className="space-y-4 ">
                    <label>Number of guests</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numGuests} 
                        onChange={(e) => setNumGuests(e.target.value)} 
                        className="w-full h-14 px-4 border-pink-500 border rounded-xl"
                        placeholder="Number of guests..."
                    />
                </div>
                <div className="space-y-4 ">
                    <label>Number of bedrooms</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBedrooms} 
                        onChange={(e) => setNumBedrooms(e.target.value)} 
                        className="w-full h-14 px-4 border-pink-500 border rounded-xl"
                        placeholder="Number of bedrooms..."
                    />
                </div>
                <div className="space-y-4 ">
                    <label>Number of bathrooms</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBathrooms} 
                        onChange={(e) => setNumBathrooms(e.target.value)} 
                        className="w-full h-14 px-4 border-pink-500 border rounded-xl"
                        placeholder="Number of bathrooms..."
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- check out date"
                    onClick={() => searchModal.open('checkout')}
                />
                <CustomButton
                    label="Buscar"
                    onClick={closeAndSearch}
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckout;
    } else if (searchModal.step == 'details') {
        content = contentDetails;
    }

    return (
        <Modal
            label="Search"
            content={content}
            close={searchModal.close}
            isOpen={searchModal.isOpen}
        />
    )
}

export default SearchModal;