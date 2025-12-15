    function gregorianToJalaali(gy, gm, gd) {
      const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      let jy, jm, jd;
      let gy2, days, leap;
      gy2 = gy - 1600;
      days = 365 * gy2 + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400);
      if (gm > 2) {
        days += g_d_m[gm - 1];
        leap = (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0;
        if (leap) days++;
      }
      days += gd;
      jy = -61 + Math.floor(days / 365.2422);
      days -= Math.floor((jy + 61) * 365.2422);
      if (days < 0) {
        jy--;
        days += 365.2422;
      }
      jm = 1;
      while (jm <= 12 && days > [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29][jm - 1]) {
        days -= [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29][jm - 1];
        jm++;
      }
      jd = days;
      return { jy, jm, jd };
    }
    function formatPersianDate(jy, jm, jd) {
      const months = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
      ];
      return `${jd} ${months[jm - 1]} ${jy}`;
    }
    const API_KEY = "your-API-key-here-bro!";
    const timezoneToCoords=
    {
      "Africa/Abidjan": { lat: 5.3364, lng: -4.0267 },
      "Africa/Accra": { lat: 5.6037, lng: -0.1870 },
      "Africa/Addis_Ababa": { lat: 9.0320, lng: 38.7469 },
      "Africa/Algiers": { lat: 36.7538, lng: 3.0588 },
      "Africa/Asmara": { lat: 15.3229, lng: 38.9251 },
      "Africa/Bamako": { lat: 12.6392, lng: -8.0029 },
      "Africa/Bangui": { lat: 4.3612, lng: 18.5870 },
      "Africa/Banjul": { lat: 13.4531, lng: -16.5760 },
      "Africa/Bissau": { lat: 11.8636, lng: -15.5957 },
      "Africa/Blantyre": { lat: -15.7861, lng: 35.0034 },
      "Africa/Brazzaville": { lat: -4.2637, lng: 15.2827 },
      "Africa/Cairo": { lat: 30.0444, lng: 31.2357 },
      "Africa/Casablanca": { lat: 33.5731, lng: -7.5898 },
      "Africa/Ceuta": { lat: 35.8894, lng: -5.3212 },
      "Africa/Conakry": { lat: 9.5370, lng: -13.6785 },
      "Africa/Dakar": { lat: 14.7167, lng: -17.4677 },
      "Africa/Dar_es_Salaam": { lat: -6.7924, lng: 39.2083 },
      "Africa/Djibouti": { lat: 11.5898, lng: 43.1453 },
      "Africa/Douala": { lat: 4.0511, lng: 9.7680 },
      "Africa/El_Aaiun": { lat: 27.1468, lng: -13.2012 },
      "Africa/Freetown": { lat: 8.4822, lng: -13.2317 },
      "Africa/Gaborone": { lat: -24.6282, lng: 25.9230 },
      "Africa/Harare": { lat: -17.8252, lng: 31.0335 },
      "Africa/Johannesburg": { lat: -26.2041, lng: 28.0473 },
      "Africa/Juba": { lat: 4.8516, lng: 31.6125 },
      "Africa/Kampala": { lat: 0.3476, lng: 32.5825 },
      "Africa/Khartoum": { lat: 15.5007, lng: 32.5599 },
      "Africa/Kigali": { lat: -1.9499, lng: 30.0589 },
      "Africa/Kinshasa": { lat: -4.3250, lng: 15.3222 },
      "Africa/Lagos": { lat: 6.5244, lng: 3.3792 },
      "Africa/Libreville": { lat: 0.3892, lng: 9.4565 },
      "Africa/Lome": { lat: 6.1228, lng: 1.2255 },
      "Africa/Luanda": { lat: -8.8390, lng: 13.2894 },
      "Africa/Lubumbashi": { lat: -11.6639, lng: 27.4802 },
      "Africa/Lusaka": { lat: -15.3875, lng: 28.3228 },
      "Africa/Malabo": { lat: 3.7566, lng: 8.7723 },
      "Africa/Maputo": { lat: -25.9692, lng: 32.5732 },
      "Africa/Maseru": { lat: -29.3171, lng: 27.4831 },
      "Africa/Mbabane": { lat: -26.3143, lng: 31.1346 },
      "Africa/Mogadishu": { lat: 2.0416, lng: 45.3470 },
      "Africa/Monrovia": { lat: 6.3005, lng: -10.7969 },
      "Africa/Nairobi": { lat: -1.2921, lng: 36.8219 },
      "Africa/Ndjamena": { lat: 12.1048, lng: 15.0353 },
      "Africa/Niamey": { lat: 13.5216, lng: 2.1073 },
      "Africa/Nouakchott": { lat: 18.0738, lng: -15.9582 },
      "Africa/Ouagadougou": { lat: 12.3703, lng: -1.5247 },
      "Africa/Porto-Novo": { lat: 6.4779, lng: 2.6321 },
      "Africa/Sao_Tome": { lat: 0.3357, lng: 6.7277 },
      "Africa/Tripoli": { lat: 32.8752, lng: 13.1875 },
      "Africa/Tunis": { lat: 36.8065, lng: 10.1815 },
      "Africa/Windhoek": { lat: -22.5594, lng: 17.0832 },

      "America/Adak": { lat: 51.8805, lng: -176.6399 },
      "America/Anchorage": { lat: 61.2181, lng: -149.9003 },
      "America/Anguilla": { lat: 18.2279, lng: -63.0542 },
      "America/Antigua": { lat: 17.0673, lng: -61.7952 },
      "America/Araguaina": { lat: -7.1976, lng: -48.2250 },
      "America/Argentina/Buenos_Aires": { lat: -34.6037, lng: -58.3816 },
      "America/Argentina/Catamarca": { lat: -28.4715, lng: -65.7850 },
      "America/Argentina/Cordoba": { lat: -31.4135, lng: -64.1811 },
      "America/Argentina/Jujuy": { lat: -24.1858, lng: -65.2995 },
      "America/Argentina/La_Rioja": { lat: -29.4116, lng: -66.8546 },
      "America/Argentina/Mendoza": { lat: -32.8894, lng: -68.8458 },
      "America/Argentina/Rio_Gallegos": { lat: -51.6215, lng: -69.2279 },
      "America/Argentina/Salta": { lat: -24.7829, lng: -65.4232 },
      "America/Argentina/San_Juan": { lat: -31.5375, lng: -68.5364 },
      "America/Argentina/San_Luis": { lat: -33.2956, lng: -66.3331 },
      "America/Argentina/Tucuman": { lat: -26.8241, lng: -65.2226 },
      "America/Argentina/Ushuaia": { lat: -54.8019, lng: -68.3030 },
      "America/Aruba": { lat: 12.5214, lng: -69.9832 },
      "America/Asuncion": { lat: -25.2637, lng: -57.5488 },
      "America/Atikokan": { lat: 48.7833, lng: -91.6833 },
      "America/Bahia": { lat: -12.9711, lng: -38.5016 },
      "America/Bahia_Banderas": { lat: 20.8173, lng: -105.3043 },
      "America/Barbados": { lat: 13.1132, lng: -59.5988 },
      "America/Belem": { lat: -1.4558, lng: -48.5044 },
      "America/Belize": { lat: 17.1899, lng: -88.4976 },
      "America/Blanc-Sablon": { lat: 51.4230, lng: -57.2675 },
      "America/Boa_Vista": { lat: 2.8238, lng: -60.6750 },
      "America/Bogota": { lat: 4.7110, lng: -74.0721 },
      "America/Boise": { lat: 43.6150, lng: -116.2023 },
      "America/Cambridge_Bay": { lat: 69.1170, lng: -105.0214 },
      "America/Campo_Grande": { lat: -20.4428, lng: -54.6464 },
      "America/Cancun": { lat: 21.1619, lng: -86.8515 },
      "America/Caracas": { lat: 10.4806, lng: -66.8618 },
      "America/Cayenne": { lat: 4.9354, lng: -52.3350 },
      "America/Cayman": { lat: 19.3133, lng: -81.2546 },
      "America/Chicago": { lat: 41.8781, lng: -87.6298 },
      "America/Chihuahua": { lat: 28.6330, lng: -106.0803 },
      "America/Costa_Rica": { lat: 9.7489, lng: -83.7534 },
      "America/Creston": { lat: 49.1020, lng: -116.5189 },
      "America/Cuiaba": { lat: -15.5963, lng: -56.0967 },
      "America/Curacao": { lat: 12.1561, lng: -68.9921 },
      "America/Danmarkshavn": { lat: 76.7683, lng: -18.6788 },
      "America/Dawson": { lat: 64.0606, lng: -139.4340 },
      "America/Dawson_Creek": { lat: 59.9833, lng: -120.2333 },
      "America/Denver": { lat: 39.7392, lng: -104.9903 },
      "America/Detroit": { lat: 42.3314, lng: -83.0458 },
      "America/Dominica": { lat: 15.4150, lng: -61.3721 },
      "America/Edmonton": { lat: 53.5461, lng: -113.4938 },
      "America/Eirunepe": { lat: -6.6622, lng: -69.8750 },
      "America/El_Salvador": { lat: 13.7942, lng: -88.8965 },
      "America/Fort_Nelson": { lat: 58.8000, lng: -122.6836 },
      "America/Fortaleza": { lat: -3.7172, lng: -38.5433 },
      "America/Glace_Bay": { lat: 45.5815, lng: -60.0000 },
      "America/Goose_Bay": { lat: 53.3150, lng: -60.3386 },
      "America/Grand_Turk": { lat: 21.4667, lng: -71.1333 },
      "America/Grenada": { lat: 12.1061, lng: -61.7048 },
      "America/Guadeloupe": { lat: 16.2500, lng: -61.5833 },
      "America/Guatemala": { lat: 14.6349, lng: -90.5069 },
      "America/Guayaquil": { lat: -2.1962, lng: -79.8862 },
      "America/Guyana": { lat: 6.8013, lng: -58.1553 },
      "America/Halifax": { lat: 44.6488, lng: -63.5752 },
      "America/Havana": { lat: 23.1136, lng: -82.3666 },
      "America/Hermosillo": { lat: 29.0729, lng: -110.9559 },
      "America/Indiana/Indianapolis": { lat: 39.7684, lng: -86.1581 },
      "America/Indiana/Knox": { lat: 41.2800, lng: -86.6389 },
      "America/Indiana/Marengo": { lat: 38.3750, lng: -86.3000 },
      "America/Indiana/Petersburg": { lat: 38.4922, lng: -87.2339 },
      "America/Indiana/Tell_City": { lat: 38.1000, lng: -86.7500 },
      "America/Indiana/Vevay": { lat: 38.7431, lng: -85.0731 },
      "America/Indiana/Vincennes": { lat: 38.6770, lng: -87.5161 },
      "America/Indiana/Winamac": { lat: 41.0500, lng: -86.6000 },
      "America/Inuvik": { lat: 68.3600, lng: -133.7231 },
      "America/Iqaluit": { lat: 63.7467, lng: -68.5175 },
      "America/Jamaica": { lat: 18.1096, lng: -77.2975 },
      "America/Juneau": { lat: 58.3019, lng: -134.4197 },
      "America/Kentucky/Louisville": { lat: 38.2527, lng: -85.7585 },
      "America/Kentucky/Monticello": { lat: 36.8333, lng: -84.7500 },
      "America/Kralendijk": { lat: 12.1510, lng: -68.2680 },
      "America/La_Paz": { lat: -16.4897, lng: -68.1193 },
      "America/Lima": { lat: -12.0464, lng: -77.0428 },
      "America/Los_Angeles": { lat: 34.0522, lng: -118.2437 },
      "America/Lower_Princes": { lat: 18.0258, lng: -63.0490 },
      "America/Maceio": { lat: -9.6496, lng: -35.7089 },
      "America/Managua": { lat: 12.1503, lng: -86.2675 },
      "America/Manaus": { lat: -3.1190, lng: -60.0217 },
      "America/Marigot": { lat: 18.0707, lng: -63.0911 },
      "America/Martinique": { lat: 14.6305, lng: -61.0372 },
      "America/Matamoros": { lat: 25.8837, lng: -97.5033 },
      "America/Mazatlan": { lat: 23.2494, lng: -106.4108 },
      "America/Menominee": { lat: 45.1139, lng: -87.5631 },
      "America/Merida": { lat: 20.9672, lng: -89.5926 },
      "America/Metlakatla": { lat: 55.1289, lng: -131.5764 },
      "America/Mexico_City": { lat: 19.4326, lng: -99.1332 },
      "America/Miquelon": { lat: 46.7750, lng: -56.1583 },
      "America/Moncton": { lat: 46.0878, lng: -64.7782 },
      "America/Monterrey": { lat: 25.6866, lng: -100.3161 },
      "America/Montevideo": { lat: -34.9011, lng: -56.1645 },
      "America/Montserrat": { lat: 16.7456, lng: -62.1963 },
      "America/Nassau": { lat: 25.0343, lng: -77.3963 },
      "America/New_York": { lat: 40.7128, lng: -74.0060 },
      "America/Nipigon": { lat: 50.6667, lng: -88.8167 },
      "America/Nome": { lat: 64.5011, lng: -165.4064 },
      "America/Noronha": { lat: -3.8947, lng: -32.1875 },
      "America/North_Dakota/Beulah": { lat: 47.2583, lng: -101.2833 },
      "America/North_Dakota/Center": { lat: 47.1164, lng: -101.5703 },
      "America/North_Dakota/New_Salem": { lat: 46.8333, lng: -101.5000 },
      "America/Nuuk": { lat: 64.1833, lng: -51.7214 },
      "America/Ojinaga": { lat: 29.5667, lng: -104.4000 },
      "America/Panama": { lat: 8.5380, lng: -80.7821 },
      "America/Pangnirtung": { lat: 66.1431, lng: -65.7031 },
      "America/Paramaribo": { lat: 5.8520, lng: -55.2038 },
      "America/Phoenix": { lat: 33.4484, lng: -112.0740 },
      "America/Port-au-Prince": { lat: 18.5914, lng: -72.3083 },
      "America/Port_of_Spain": { lat: 10.6667, lng: -61.5167 },
      "America/Porto_Velho": { lat: -8.7619, lng: -63.9036 },
      "America/Puerto_Rico": { lat: 18.2208, lng: -66.5901 },
      "America/Punta_Arenas": { lat: -53.1333, lng: -70.9167 },
      "America/Rainy_River": { lat: 48.7167, lng: -94.4167 },
      "America/Rankin_Inlet": { lat: 62.8237, lng: -92.1244 },
      "America/Recife": { lat: -8.0476, lng: -34.8770 },
      "America/Regina": { lat: 50.4452, lng: -104.6189 },
      "America/Resolute": { lat: 74.6939, lng: -94.8103 },
      "America/Rio_Branco": { lat: -9.9747, lng: -67.8100 },
      "America/Santarem": { lat: -2.4300, lng: -54.7066 },
      "America/Santiago": { lat: -33.4489, lng: -70.6693 },
      "America/Santo_Domingo": { lat: 18.4861, lng: -69.9312 },
      "America/Sao_Paulo": { lat: -23.5505, lng: -46.6333 },
      "America/Scoresbysund": { lat: 70.4833, lng: -21.4667 },
      "America/Sitka": { lat: 57.0542, lng: -135.3333 },
      "America/St_Barthelemy": { lat: 17.8960, lng: -62.8494 },
      "America/St_Johns": { lat: 47.5615, lng: -52.7126 },
      "America/St_Kitts": { lat: 17.3000, lng: -62.7333 },
      "America/St_Lucia": { lat: 13.9093, lng: -60.9789 },
      "America/St_Thomas": { lat: 18.3358, lng: -64.9036 },
      "America/St_Vincent": { lat: 13.2500, lng: -61.2000 },
      "America/Swift_Current": { lat: 50.2857, lng: -107.8069 },
      "America/Tegucigalpa": { lat: 14.0818, lng: -87.2068 },
      "America/Thule": { lat: 76.5312, lng: -68.7032 },
      "America/Thunder_Bay": { lat: 48.3809, lng: -89.2477 },
      "America/Tijuana": { lat: 32.5149, lng: -117.0382 },
      "America/Toronto": { lat: 43.6532, lng: -79.3832 },
      "America/Tortola": { lat: 18.4238, lng: -64.6298 },
      "America/Vancouver": { lat: 49.2827, lng: -123.1207 },
      "America/Whitehorse": { lat: 60.7212, lng: -135.0568 },
      "America/Winnipeg": { lat: 49.8951, lng: -97.1384 },
      "America/Yakutat": { lat: 59.5450, lng: -139.7236 },
      "America/Yellowknife": { lat: 62.4540, lng: -114.3718 },

      "Asia/Aden": { lat: 12.7794, lng: 45.0231 },
      "Asia/Almaty": { lat: 43.2220, lng: 76.8512 },
      "Asia/Amman": { lat: 31.9532, lng: 35.9106 },
      "Asia/Anadyr": { lat: 64.7795, lng: 177.4992 },
      "Asia/Aqtau": { lat: 43.6626, lng: 51.1644 },
      "Asia/Aqtobe": { lat: 50.2843, lng: 57.1521 },
      "Asia/Ashgabat": { lat: 37.9500, lng: 58.3833 },
      "Asia/Atyrau": { lat: 47.1181, lng: 51.8579 },
      "Asia/Baghdad": { lat: 33.3152, lng: 44.3661 },
      "Asia/Bahrain": { lat: 26.0667, lng: 50.5577 },
      "Asia/Baku": { lat: 40.4093, lng: 49.8671 },
      "Asia/Bangkok": { lat: 13.7563, lng: 100.5018 },
      "Asia/Barnaul": { lat: 53.3548, lng: 83.7698 },
      "Asia/Beirut": { lat: 33.8938, lng: 35.5018 },
      "Asia/Bishkek": { lat: 42.8746, lng: 74.5698 },
      "Asia/Brunei": { lat: 4.9031, lng: 114.9398 },
      "Asia/Calcutta": { lat: 22.5726, lng: 88.3639 },
      "Asia/Chita": { lat: 52.0315, lng: 113.4938 },
      "Asia/Choibalsan": { lat: 48.0875, lng: 110.9150 },
      "Asia/Colombo": { lat: 6.9271, lng: 79.8612 },
      "Asia/Damascus": { lat: 33.5138, lng: 36.2765 },
      "Asia/Dhaka": { lat: 23.8103, lng: 90.4125 },
      "Asia/Dili": { lat: -8.5586, lng: 125.5731 },
      "Asia/Dubai": { lat: 25.276987, lng: 55.296249 },
      "Asia/Dushanbe": { lat: 38.5358, lng: 68.7793 },
      "Asia/Famagusta": { lat: 35.1055, lng: 33.9495 },
      "Asia/Gaza": { lat: 31.5074, lng: 34.4857 },
      "Asia/Hebron": { lat: 31.5326, lng: 35.0998 },
      "Asia/Ho_Chi_Minh": { lat: 10.8231, lng: 106.6297 },
      "Asia/Hong_Kong": { lat: 22.3193, lng: 114.1694 },
      "Asia/Hovd": { lat: 48.0187, lng: 91.6500 },
      "Asia/Irkutsk": { lat: 52.2869, lng: 104.2889 },
      "Asia/Jakarta": { lat: -6.2088, lng: 106.8456 },
      "Asia/Jayapura": { lat: -2.5916, lng: 140.6667 },
      "Asia/Jerusalem": { lat: 31.7683, lng: 35.2137 },
      "Asia/Kabul": { lat: 34.5553, lng: 69.2075 },
      "Asia/Kamchatka": { lat: 53.0150, lng: 158.6333 },
      "Asia/Karachi": { lat: 24.8607, lng: 67.0011 },
      "Asia/Kathmandu": { lat: 27.7172, lng: 85.3240 },
      "Asia/Khandyga": { lat: 62.6575, lng: 135.5200 },
      "Asia/Kolkata": { lat: 22.5726, lng: 88.3639 },
      "Asia/Krasnoyarsk": { lat: 56.0184, lng: 92.8672 },
      "Asia/Kuala_Lumpur": { lat: 3.1390, lng: 101.6869 },
      "Asia/Kuching": { lat: 1.5497, lng: 110.3633 },
      "Asia/Kuwait": { lat: 29.3759, lng: 47.9774 },
      "Asia/Macau": { lat: 22.1987, lng: 113.5439 },
      "Asia/Magadan": { lat: 59.5667, lng: 150.8000 },
      "Asia/Makassar": { lat: -5.1483, lng: 119.4327 },
      "Asia/Manila": { lat: 14.5995, lng: 120.9842 },
      "Asia/Muscat": { lat: 23.6146, lng: 58.5457 },
      "Asia/Nicosia": { lat: 35.1856, lng: 33.3823 },
      "Asia/Novokuznetsk": { lat: 53.7596, lng: 87.1278 },
      "Asia/Novosibirsk": { lat: 55.0084, lng: 82.9357 },
      "Asia/Omsk": { lat: 54.9924, lng: 73.3686 },
      "Asia/Oral": { lat: 51.2213, lng: 51.3500 },
      "Asia/Phnom_Penh": { lat: 11.5625, lng: 104.9160 },
      "Asia/Pontianak": { lat: -0.0263, lng: 109.3425 },
      "Asia/Pyongyang": { lat: 39.0392, lng: 125.7625 },
      "Asia/Qatar": { lat: 25.276987, lng: 51.5222 },
      "Asia/Qostanay": { lat: 53.2000, lng: 63.6000 },
      "Asia/Qyzylorda": { lat: 44.8000, lng: 65.4500 },
      "Asia/Rangoon": { lat: 16.8409, lng: 96.1735 },
      "Asia/Riyadh": { lat: 24.7136, lng: 46.6753 },
      "Asia/Sakhalin": { lat: 46.9350, lng: 142.7886 },
      "Asia/Samarkand": { lat: 39.6534, lng: 66.9650 },
      "Asia/Seoul": { lat: 37.5665, lng: 126.9780 },
      "Asia/Shanghai": { lat: 31.2304, lng: 121.4737 },
      "Asia/Singapore": { lat: 1.3521, lng: 103.8198 },
      "Asia/Srednekolymsk": { lat: 67.4667, lng: 153.7167 },
      "Asia/Taipei": { lat: 25.0330, lng: 121.5654 },
      "Asia/Tashkent": { lat: 41.2995, lng: 69.2401 },
      "Asia/Tbilisi": { lat: 41.7151, lng: 44.8271 },
      "Asia/Tehran": { lat: 35.6892, lng: 51.3890 },
      "Asia/Thimphu": { lat: 27.4712, lng: 89.6339 },
      "Asia/Tokyo": { lat: 35.6895, lng: 139.6917 },
      "Asia/Tomsk": { lat: 56.4977, lng: 84.9745 },
      "Asia/Ulaanbaatar": { lat: 47.8864, lng: 106.9057 },
      "Asia/Urumqi": { lat: 43.8256, lng: 87.6168 },
      "Asia/Ust-Nera": { lat: 64.5533, lng: 143.1833 },
      "Asia/Vientiane": { lat: 17.9757, lng: 102.6331 },
      "Asia/Vladivostok": { lat: 43.1198, lng: 131.8869 },
      "Asia/Yakutsk": { lat: 62.0359, lng: 129.6759 },
      "Asia/Yangon": { lat: 16.8409, lng: 96.1735 },
      "Asia/Yekaterinburg": { lat: 56.8519, lng: 60.6122 },
      "Asia/Yerevan": { lat: 40.1792, lng: 44.4991 },

      "Europe/Amsterdam": { lat: 52.3676, lng: 4.9041 },
      "Europe/Andorra": { lat: 42.5063, lng: 1.5218 },
      "Europe/Astrakhan": { lat: 46.3494, lng: 48.0441 },
      "Europe/Athens": { lat: 37.9838, lng: 23.7275 },
      "Europe/Belgrade": { lat: 44.7866, lng: 20.4489 },
      "Europe/Berlin": { lat: 52.5200, lng: 13.4050 },
      "Europe/Bratislava": { lat: 48.1486, lng: 17.1077 },
      "Europe/Brussels": { lat: 50.8503, lng: 4.3517 },
      "Europe/Bucharest": { lat: 44.4268, lng: 26.1025 },
      "Europe/Budapest": { lat: 47.4979, lng: 19.0402 },
      "Europe/Busingen": { lat: 47.6977, lng: 8.6835 },
      "Europe/Chisinau": { lat: 47.0105, lng: 28.8638 },
      "Europe/Copenhagen": { lat: 55.6761, lng: 12.5683 },
      "Europe/Dublin": { lat: 53.3498, lng: -6.2603 },
      "Europe/Gibraltar": { lat: 36.1408, lng: -5.3536 },
      "Europe/Guernsey": { lat: 49.4656, lng: -2.5897 },
      "Europe/Helsinki": { lat: 60.1699, lng: 24.9384 },
      "Europe/Isle_of_Man": { lat: 54.2361, lng: -4.5481 },
      "Europe/Istanbul": { lat: 41.0082, lng: 28.9784 },
      "Europe/Jersey": { lat: 49.2196, lng: -2.1330 },
      "Europe/Kaliningrad": { lat: 54.7104, lng: 20.4522 },
      "Europe/Kiev": { lat: 50.4501, lng: 30.5234 },
      "Europe/Kirov": { lat: 58.6036, lng: 49.6672 },
      "Europe/Lisbon": { lat: 38.7223, lng: -9.1393 },
      "Europe/Ljubljana": { lat: 46.0569, lng: 14.5058 },
      "Europe/London": { lat: 51.5074, lng: -0.1278 },
      "Europe/Luxembourg": { lat: 49.6116, lng: 6.1319 },
      "Europe/Madrid": { lat: 40.4168, lng: -3.7038 },
      "Europe/Malta": { lat: 35.9375, lng: 14.3754 },
      "Europe/Mariehamn": { lat: 60.0973, lng: 19.9348 },
      "Europe/Minsk": { lat: 53.9045, lng: 27.5615 },
      "Europe/Monaco": { lat: 43.7384, lng: 7.4246 },
      "Europe/Moscow": { lat: 55.7558, lng: 37.6173 },
      "Europe/Oslo": { lat: 59.9139, lng: 10.7522 },
      "Europe/Paris": { lat: 48.8566, lng: 2.3522 },
      "Europe/Podgorica": { lat: 42.4303, lng: 19.2593 },
      "Europe/Prague": { lat: 50.0755, lng: 14.4378 },
      "Europe/Riga": { lat: 56.9496, lng: 24.1052 },
      "Europe/Rome": { lat: 41.9028, lng: 12.4964 },
      "Europe/Samara": { lat: 53.1959, lng: 50.1000 },
      "Europe/San_Marino": { lat: 43.9424, lng: 12.4578 },
      "Europe/Sarajevo": { lat: 43.8563, lng: 18.4131 },
      "Europe/Saratov": { lat: 51.5406, lng: 46.0086 },
      "Europe/Simferopol": { lat: 44.9482, lng: 34.1000 },
      "Europe/Skopje": { lat: 41.9973, lng: 21.4280 },
      "Europe/Sofia": { lat: 42.6977, lng: 23.3219 },
      "Europe/Stockholm": { lat: 59.3293, lng: 18.0686 },
      "Europe/Tallinn": { lat: 59.4370, lng: 24.7536 },
      "Europe/Tirane": { lat: 41.3275, lng: 19.8187 },
      "Europe/Ulyanovsk": { lat: 54.3282, lng: 48.3863 },
      "Europe/Uzhgorod": { lat: 48.6234, lng: 22.2931 },
      "Europe/Vaduz": { lat: 47.1415, lng: 9.5215 },
      "Europe/Vatican": { lat: 41.9029, lng: 12.4534 },
      "Europe/Vienna": { lat: 48.2082, lng: 16.3738 },
      "Europe/Vilnius": { lat: 54.6872, lng: 25.2797 },
      "Europe/Volgograd": { lat: 48.7080, lng: 44.5133 },
      "Europe/Warsaw": { lat: 52.2297, lng: 21.0122 },
      "Europe/Zagreb": { lat: 45.8150, lng: 15.9819 },
      "Europe/Zaporozhye": { lat: 47.8388, lng: 35.1396 },
      "Europe/Zurich": { lat: 47.3769, lng: 8.5417 },

      "Pacific/Apia": { lat: -13.8333, lng: -171.7667 },
      "Pacific/Auckland": { lat: -36.8509, lng: 174.7645 },
      "Pacific/Bougainville": { lat: -6.2000, lng: 155.8333 },
      "Pacific/Chatham": { lat: -43.9500, lng: -176.5500 },
      "Pacific/Chuuk": { lat: 7.4228, lng: 151.8400 },
      "Pacific/Easter": { lat: -27.1333, lng: -109.4167 },
      "Pacific/Efate": { lat: -17.7500, lng: 168.3167 },
      "Pacific/Enderbury": { lat: -3.1333, lng: -171.0833 },
      "Pacific/Fakaofo": { lat: -9.3667, lng: -171.1667 },
      "Pacific/Fiji": { lat: -18.1416, lng: 178.4415 },
      "Pacific/Funafuti": { lat: -8.5200, lng: 179.2200 },
      "Pacific/Galapagos": { lat: -0.7772, lng: -91.1425 },
      "Pacific/Gambier": { lat: -23.1333, lng: -134.9833 },
      "Pacific/Guadalcanal": { lat: -9.6222, lng: 159.8139 },
      "Pacific/Guam": { lat: 13.4443, lng: 144.7937 },
      "Pacific/Honolulu": { lat: 21.3069, lng: -157.8583 },
      "Pacific/Johnston": { lat: 16.7500, lng: -169.5000 },
      "Pacific/Kiritimati": { lat: 1.8667, lng: -157.3667 },
      "Pacific/Kosrae": { lat: 5.3100, lng: 162.9817 },
      "Pacific/Kwajalein": { lat: 8.7228, lng: 167.7333 },
      "Pacific/Majuro": { lat: 7.1141, lng: 171.3656 },
      "Pacific/Marquesas": { lat: -9.0000, lng: -139.5000 },
      "Pacific/Midway": { lat: 28.2093, lng: -177.3783 },
      "Pacific/Nauru": { lat: -0.5228, lng: 166.9311 },
      "Pacific/Niue": { lat: -19.0500, lng: -169.9167 },
      "Pacific/Norfolk": { lat: -29.0333, lng: 167.9500 },
      "Pacific/Noumea": { lat: -22.2758, lng: 166.4580 },
      "Pacific/Pago_Pago": { lat: -14.2710, lng: -170.7011 },
      "Pacific/Palau": { lat: 7.5000, lng: 134.5000 },
      "Pacific/Pitcairn": { lat: -25.0667, lng: -130.1000 },
      "Pacific/Pohnpei": { lat: 6.9833, lng: 158.2167 },
      "Pacific/Port_Moresby": { lat: -9.4439, lng: 147.1803 },
      "Pacific/Rarotonga": { lat: -21.2333, lng: -159.7667 },
      "Pacific/Saipan": { lat: 15.2123, lng: 145.7545 },
      "Pacific/Tahiti": { lat: -17.6500, lng: -149.5500 },
      "Pacific/Tarawa": { lat: 1.4167, lng: 172.9333 },
      "Pacific/Tongatapu": { lat: -21.1367, lng: -175.2016 },
      "Pacific/Truk": { lat: 7.4228, lng: 151.8400 },
      "Pacific/Wake": { lat: 19.2822, lng: 166.6486 },
      "Pacific/Wallis": { lat: -13.2833, lng: -176.1667 },

      "UTC": { lat: 0, lng: 0 },
      "Etc/UTC": { lat: 0, lng: 0 }
    };
    const allTimezones = Object.keys(timezoneToCoords).sort();
    let currentClocks = ["Asia/Tehran"];
    let map = null;
    let markers = [];
    const searchInput = document.getElementById("searchInput");
    const timezoneList = document.getElementById("timezoneList");
    const clocksContainer = document.getElementById("clocksContainer");
    const themeToggle = document.getElementById("themeToggle");

    function initTheme() {
      const isLight = localStorage.getItem("theme") === "light";
      if (isLight) {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
      }
    }
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggle.textContent = isLight ? "☀️" : "🌙";
    });

    function renderTimezoneList(query = "") {
      timezoneList.innerHTML = "";
      const filtered = allTimezones.filter(tz =>
        tz.toLowerCase().includes(query.toLowerCase())
      );
      filtered.forEach(tz => {
        const div = document.createElement("div");
        div.className = "timezone-item";
        div.textContent = tz.replace(/_/g, " ");
        div.onclick = () => addClock(tz);
        timezoneList.appendChild(div);
      });
    }
    searchInput.addEventListener("input", (e) => {
      renderTimezoneList(e.target.value);
    });

    function addClock(timezone) {
      if (currentClocks.includes(timezone)) return;
      if (currentClocks.length >= 3) {
        alert("حداکثر 3 ساعت مجاز است.");
        return;
      }
      currentClocks.push(timezone);
      renderClocks();
      renderMap();
    }
    function removeClock(timezone) {
      currentClocks = currentClocks.filter(tz => tz !== timezone);
      renderClocks();
      renderMap();
    }
    function renderClocks() {
      clocksContainer.innerHTML = "";
      currentClocks.forEach(tz => {
        const card = document.createElement("div");
        card.className = "clock-card";
        card.innerHTML = `
          <div class="clock-title">
            <span>${tz.replace(/_/g, " ")}</span>
            <button class="remove-btn">×</button>
          </div>
          <div class="clock-time">--:--:--</div>
          <div class="clock-date">دریافت تاریخ...</div>
          <div class="timezone-info">دریافت اطلاعات...</div>
        `;
        card.querySelector(".remove-btn").onclick = () => removeClock(tz);
        clocksContainer.appendChild(card);
      });
      updateAllClocks();
    }

    async function fetchTime(timezone) {
      const coords = timezoneToCoords[timezone];
      if (!coords) return null;

      try {
        const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${coords.lat}&lng=${coords.lng}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "FAILED") throw new Error(data.message);
        return data;
      } catch (err) {
        console.error("API Error:", err);
        return null;
      }
    }

    async function updateAllClocks() {
      for (let i = 0; i < currentClocks.length; i++) {
        const tz = currentClocks[i];
        const card = clocksContainer.children[i];
        if (!card) continue;
        const data = await fetchTime(tz);
        if (data) {
          const datetime = new Date(data.timestamp * 1000);
          const h = String(datetime.getUTCHours()).padStart(2, "0");
          const m = String(datetime.getUTCMinutes()).padStart(2, "0");
          const s = String(datetime.getUTCSeconds()).padStart(2, "0");
          card.querySelector(".clock-time").textContent = `${h}:${m}:${s}`;
          const gOptions = {
            timeZone: tz,
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          };
          const gregorianDate = new Intl.DateTimeFormat("fa-IR-u-nu-latn", gOptions).format(datetime);
          const localDate = new Date(datetime.toLocaleString("en-US", { timeZone: tz }));
          const j = gregorianToJalaali(localDate.getFullYear(), localDate.getMonth() + 1, localDate.getDate());
          const persianDate = formatPersianDate(j.jy, j.jm, j.jd);
          card.querySelector(".clock-date").innerHTML = 
            `${gregorianDate}<br><small>(${persianDate})</small>`;
          const offset = data.gmtOffset >= 0 ? `+${Math.floor(data.gmtOffset/3600)}` : `${Math.floor(data.gmtOffset/3600)}`;
          const dst = data.dst ? "فعال" : "غیرفعال";
          card.querySelector(".timezone-info").textContent = 
            `UTC${offset} • DST: ${dst}`;
        } else {
          card.querySelector(".clock-time").textContent = "--:--:--";
          card.querySelector(".clock-date").textContent = "خطا در دریافت";
          card.querySelector(".timezone-info").textContent = "خطا";
        }
      }
    }

    function initMap() {
      map = L.map('map').setView([20, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      map.on('click', function(e) {
        const clickLat = e.latlng.lat;
        const clickLng = e.latlng.lng;
        let closestTz = null;
        let minDistance = Infinity;
        for (const tz in timezoneToCoords) {
          const c = timezoneToCoords[tz];
          const dx = clickLng - c.lng;
          const dy = clickLat - c.lat;
          const dist = dx * dx + dy * dy;
          if (dist < minDistance) {
            minDistance = dist;
            closestTz = tz;
          }
        }
        if (closestTz && !currentClocks.includes(closestTz)) {
          if (currentClocks.length >= 3) {
            alert("حداکثر 3 ساعت مجاز است.");
            return;
          }
          currentClocks.push(closestTz);
          renderClocks();
          renderMap();
          L.popup().setLatLng(e.latlng).setContent(`<b>${closestTz.replace(/_/g, " ")}</b><br>✅ اضافه شد!`).openOn(map);
        }
      });
    }
    function renderMap() {
      if (!map) initMap();
      markers.forEach(marker => map.removeLayer(marker));
      markers = [];
      currentClocks.forEach(tz => {
        const coords = timezoneToCoords[tz];
        if (coords) {
          const marker = L.marker([coords.lat, coords.lng]).addTo(map).bindPopup(tz.replace(/_/g, " "));
          markers.push(marker);
        }
      });
      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.2));
      }
    }
    initTheme();
    renderTimezoneList();
    renderClocks();
    setInterval(updateAllClocks, 5000);