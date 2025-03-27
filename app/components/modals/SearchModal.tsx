'use client';

import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
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
    const [country, setCountry] = useState<SelectCountryValue>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    //
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

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckout;
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