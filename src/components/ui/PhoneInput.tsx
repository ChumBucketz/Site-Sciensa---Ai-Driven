"use client";

import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  invalid?: boolean;
}

export function PhoneInput({ value, onChange, name, invalid = false }: PhoneInputProps) {
  return (
    <div className="phone-input-wrapper">
      <style>{`
        .phone-input-wrapper .react-tel-input .flag-dropdown {
          background: #fff;
          border: 1px solid ${invalid ? "#f87171" : "#e5e5e5"};
          border-right: none;
          border-radius: 8px 0 0 8px;
        }
        .phone-input-wrapper .react-tel-input .flag-dropdown.open,
        .phone-input-wrapper .react-tel-input .flag-dropdown:hover {
          background: #f5f5f5;
          border-color: #e5e5e5;
          border-radius: 8px 0 0 8px;
        }
        .phone-input-wrapper .react-tel-input .flag-dropdown.open .selected-flag {
          background: #f5f5f5;
          border-radius: 8px 0 0 8px;
        }
        .phone-input-wrapper .react-tel-input .selected-flag {
          border-radius: 8px 0 0 8px;
          padding: 0 8px 0 12px;
        }
        .phone-input-wrapper .react-tel-input .form-control {
          width: 100%;
          height: 42px;
          border: 1px solid ${invalid ? "#f87171" : "#e5e5e5"};
          border-radius: 8px;
          font-size: 15px;
          color: #000;
          padding-left: 52px;
          transition: border-color 0.15s, box-shadow 0.15s;
          font-family: inherit;
        }
        .phone-input-wrapper .react-tel-input .form-control:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
        }
        .phone-input-wrapper .react-tel-input .country-list {
          border-radius: 10px;
          border: 1px solid #e5e5e5;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          margin-top: 4px;
          font-size: 13px;
          font-family: inherit;
          max-height: 220px;
        }
        .phone-input-wrapper .react-tel-input .country-list .country:hover,
        .phone-input-wrapper .react-tel-input .country-list .country.highlight {
          background: #f5f5f5;
        }
        .phone-input-wrapper .react-tel-input .country-list .search {
          padding: 8px 10px;
          border-bottom: 1px solid #f0f0f0;
        }
        .phone-input-wrapper .react-tel-input .country-list .search-box {
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 13px;
          width: 100%;
          font-family: inherit;
        }
        .phone-input-wrapper .react-tel-input .country-list .search-box:focus {
          outline: none;
          border-color: #000;
        }
      `}</style>

      {/* Hidden input so FormData captures the value */}
      <input type="hidden" name={name} value={value} readOnly />

      <PhoneInputLib
        country="br"
        value={value}
        onChange={onChange}
        enableSearch
        searchPlaceholder="Search country..."
        inputProps={{ autoComplete: "tel" }}
        specialLabel=""
        masks={{ br: "(..) .....-....", }}
      />
    </div>
  );
}
