function fetchData(country) {
  user_country = country;
  console.log(country);
  country_name_element.innerHTML = "Loading...";

  (cases_list = []),
  @ @ - 122, 18 + 121, 16 @ @
  function updateStats() {

    country_name_element.innerHTML = user_country;
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = +$ {
      new_confirmed_cases
    };
    new_cases_element.innerHTML = `+${new_confirmed_cases}`;
    recovered_element.innerHTML = total_recovered;
    new_recovered_element.innerHTML = +$ {
      new_recovered_cases
    };
    new_recovered_element.innerHTML = `+${new_recovered_cases}`;
    deaths_element.innerHTML = total_deaths;
    new_deaths_element.innerHTML = +$ {
      new_deaths_cases
    };
    new_deaths_element.innerHTML = `+${new_deaths_cases}`;

    // format dates
    dates.forEach((date) => {
      formatedDates.push(formatDate(date));
    });

    console.log(dates);
  }

  // UPDATE CHART
  @ @ - 199, 5 + 196, 5 @ @
  const monthsNames = [
      function formatDate(dateString) {
        let date = new Date(dateString);

        return $ {
          date.getDate()
        }
        $ {
          monthsNames[date.getMonth() - 1]
        };
        return `${date.getDate()} ${monthsNames[date.getMonth() - 1]}`;
      }
