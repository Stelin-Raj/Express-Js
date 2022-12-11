import axios from "axios";
import React, { useState } from "react";
import ResultCard from "./ResultCard";
import {
  Container,
  Data,
  Inputbox,
  Searchbox,
  Resultbox,
  Result,
  FirstResult,
} from "./Weather.Style";

function Weather() {
  const [city, setCity] = useState("");
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(false);

  const handelSubmit = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      data: { data },
    } = await axios.post(`http://localhost:5000/api/weather`, { city }, config);

    setResponseData(data);
    setLoading(false);
  };

  console.log(city);
  return (
    <Container>
      <Data>
        <div className="meta-data">
          {loading ? (
            <h2>
              <span> 0 &#176;</span> C <span className="location-name"></span>
            </h2>
          ) : (
            <>
              {responseData ? (
                <>
                  <h2>
                    <span> {Math.round(responseData.main.temp)} &#176;</span> C{" "}
                    <span className="location-name">
                      in {responseData.name}
                    </span>
                  </h2>
                </>
              ) : (
                <h2>
                  <span> 0 &#176;</span> C{" "}
                  <span className="location-name"></span>
                </h2>
              )}
            </>
          )}
        </div>
      </Data>

      <Inputbox>
        <Resultbox>
          <h1>Weather App</h1>
          <Searchbox>
            <input
              type="text"
              placeholder="Search for cities"
              className="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-btn" onClick={handelSubmit}>
              Search
            </button>
          </Searchbox>

          <FirstResult>
            {loading ? (
              <Result class="result__profile">
                <span class="result__name">Loading </span>
              </Result>
            ) : (
              <>
                {responseData ? (
                  <>
                    <ResultCard
                      className="firstResult"
                      label="City"
                      data={responseData.name}
                    />
                    <ResultCard
                      label="Current Temperature"
                      data={responseData.main.temp}
                      unit="C"
                    />
                    <ResultCard
                      label="Maximum Recorded"
                      data={responseData.main.temp_max}
                      unit="C"
                    />
                    <ResultCard
                      label="Minimum Recorded"
                      data={responseData.main.temp_min}
                      unit="C"
                    />
                    <ResultCard
                      label="Wind Speed"
                      data={responseData.wind.speed}
                      unit="Km/h"
                    />
                  </>
                ) : (
                  <Result class="result__profile">
                    <span class="result__name">
                      Please Enter a Valid City Name..
                    </span>
                  </Result>
                )}
              </>
            )}
          </FirstResult>
        </Resultbox>
      </Inputbox>
    </Container>
  );
}

export default Weather;
