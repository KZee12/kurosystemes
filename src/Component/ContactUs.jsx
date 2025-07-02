import React, { useRef, useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaComment,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Contact from "../assets/Contact.avif";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "US",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd"
        );
        const data = await response.json();
        const countryList = data
          .map((country) => ({
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
            country: country.cca2,
            flag: `https://flagcdn.com/w20/${country.cca2.toLowerCase()}.png`,
            name: country.name.common,
          }))
          .filter((c) => c.code);
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([
          {
            code: "+1",
            country: "US",
            flag: "https://flagcdn.com/w20/us.png",
            name: "United States",
          },
          {
            code: "+91",
            country: "IN",
            flag: "https://flagcdn.com/w20/in.png",
            name: "India",
          },
          {
            code: "+44",
            country: "GB",
            flag: "https://flagcdn.com/w20/gb.png",
            name: "United Kingdom",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhoneChange = (value, country) => {
    setForm({
      ...form,
      phone: value,
      country: country.countryCode.toUpperCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm(
        "service_hgrw6l9",
        "template_gsu55xj",
        formRef.current,
        "2jJ9q21-7VC94TD7c"
      )
      .then(
        () => {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            phone: "",
            country: "US",
            location: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .form-control {
        position: relative;
        margin: 1rem 0;
        width: 100%;
      }
      
      .form-control label {
        display: block;
        font-size: 0.875rem;
        color: #fff;
        margin-bottom: 0.25rem;
        font-weight: 500;
      }
      
      .form-control input,
      .form-control textarea {
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 0.5rem;
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.5rem;
        font-size: 1rem;
        color: #fff;
        transition: border-color 0.3s ease, background-color 0.3s ease;
      }
      
      .form-control input:focus,
      .form-control textarea:focus {
        outline: none;
        border-color: #87CEEB;
        background-color: rgba(255, 255, 255, 0.15);
      }
      
      .form-control .input-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: #87CEEB;
        font-size: 1.25rem;
        z-index: 1;
      }
      
      .phone-input-field {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem 1rem 0.75rem 3.5rem !important;
        font-size: 1rem !important;
        color: #fff !important;
        width: 100% !important;
        height: 2.75rem !important;
      }
      
      .phone-input-field:focus {
        outline: none !important;
        border-color: #87CEEB !important;
        background-color: rgba(255, 255, 255, 0.15) !important;
      }
      
      .react-tel-input .flag-dropdown {
        background-color: transparent !important;
        border: none !important;
        border-radius: 0.5rem 0 0 0.5rem !important;
        padding-left: 0.5rem !important;
      }
      
      .react-tel-input .selected-flag {
        background-color: transparent !important;
        padding: 0 !important;
      }
      
      .react-tel-input .selected-flag::after {
        content: '';
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #fff;
        transition: transform 0.3s ease;
      }
      
      .react-tel-input .selected-flag.open::after {
        transform: translateY(-50%) rotate(180deg);
      }
      
      .react-tel-input .country-list .country:hover,
      .react-tel-input .country-list .country.highlight {
        background-color: #87CEEB !important;
        color: #000 !important;
      }
      
      .Button {
        width: 100%;
        height: 2.5rem;
        background: linear-gradient(90deg, #4B5EAA, #8A4AF3);
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      
      .Button:hover {
        background: linear-gradient(90deg, #3A4E9A, #7A3AE3);
      }
      
      @media (max-width: 767px) {
        .form-control input,
        .form-control textarea {
          font-size: 0.9rem;
          padding: 0.6rem 1rem 0.6rem 2.25rem;
        }
        .form-control .input-icon {
          top: 50%;
          font-size: 1.1rem;
        }
        .phone-input-field {
          padding: 0.6rem 1rem 0.6rem 3rem !important;
          font-size: 0.9rem !important;
          height: 2.5rem !important;
        }
        .react-tel-input .selected-flag::after {
          border-top-width: 5px;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const formFields = [
    { field: "name", icon: <FaUser />, label: "Name" },
    { field: "email", icon: <FaEnvelope />, label: "Email" },
    { field: "location", icon: <FaMapMarkerAlt />, label: "Location" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0a192f 0%, #000000 100%)",
      }}
    >
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] flex items-center justify-center sm:justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-white max-w-none sm:max-w-2xl lg:max-w-3xl text-center sm:text-left space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-md">
              Get in Touch with Us
            </h1>
            <p className="text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow max-w-lg sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0">
              We are here to help you connect and explore how KURO can support
              your needs.
            </p>
          </div>
        </div>
      </div>
      <main className="relative flex-grow contact-section pt-16 px-4 md:px-0">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 items-stretch px-3 mb-10 sm:px-4 md:flex-row">
          <div className="md:w-1/2 form-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg mb-4 flex justify-center flex-col">
            <h2 className="text-2xl md:text-3xl text-center text-white mb-6 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
              Get in Touch
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((fieldData) => {
                const { field, icon, label } = fieldData;
                return (
                  <div key={field} className="form-control">
                    <label>{label}</label>
                    <div className="relative">
                      <input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      />
                      <span className="input-icon">{icon}</span>
                    </div>
                  </div>
                );
              })}
              <div className="form-control">
                <label>Phone</label>
                <div className="relative">
                  <PhoneInput
                    country={"us"}
                    value={form.phone}
                    onChange={handlePhoneChange}
                    placeholder=""
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoComplete: "off",
                      className: "phone-input-field",
                    }}
                    inputClass="!bg-transparent !border !border-white/30 !text-white !rounded-lg"
                    buttonClass="!bg-transparent !border-none"
                    dropdownClass="!bg-[#1a2a44] !border !border-white/30 !text-white"
                  />
                </div>
              </div>
              <div className="form-control">
                <label>Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{ resize: "none" }}
                    autoComplete="off"
                  />
                  <span className="input-icon">
                    <FaComment />
                  </span>
                </div>
              </div>
              <button type="submit" className="Button">
                Send Message
              </button>
              {status === "loading" && (
                <div className="text-center font-medium mt-3 text-yellow-400 drop-shadow">
                  Sending...
                </div>
              )}
              {status === "success" && (
                <div className="text-center font-medium mt-3 text-green-400 drop-shadow">
                  Thank you! We'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-center font-medium mt-3 text-red-400 drop-shadow">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col gap-12">
            <div className="info-card rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/9] md:h-80 border border-white/30 bg-white/20 backdrop-blur-xl">
              <iframe
                title="Kuro Systems Location"
                src="https://www.google.com/maps?q=19.992583,73.739444&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
              <div className="absolute top-4 right-4 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
                Kuro Systems
              </div>
            </div>
            <div className="info-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg space-y-4">
              <div className="flex items-center space-x-3 text-blue-400">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+918956014041"
                  className="font-bold text-lg text-white drop-shadow hover:text-blue-300 transition-colors duration-300"
                >
                  +91 8956014041
                </a>
              </div>
              <div className="text-white drop-shadow">
                We are here to make your ideas a reality.
              </div>
              <div className="flex items-center space-x-3 text-blue-400">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:kunal.z@kurosystems.net"
                  className="font-bold text-lg text-white drop-shadow hover:text-blue-300 transition-colors duration-300"
                >
                  Contact Via Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
