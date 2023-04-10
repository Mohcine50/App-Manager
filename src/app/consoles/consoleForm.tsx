"use client";
import { useFormik } from "formik";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React from "react";
import { addConsole } from "../../../utils";

interface IProps {
	name?: string;
	email?: string;
	password?: string;
	country?: string;
	phone?: string;
	operator?: string;
	status?: string;
}
const ConsoleForm = ({
	name = "",
	email = "",
	password = "",
	country = "",
	phone = "",
	operator = "",
	status = "",
}: IProps) => {
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			country: "",
			phone: "",
			operator: "",
			status: "",
		},
		onSubmit: async (values) => {
			const status = await addConsole({
				name: values.name,
				email: values.email,
				password: values.password,
				country: values.country,
				phoneNumber: values.phone,
				status: values.status,
			});
			if (status === 200) {
				router.replace("/consoles");
			}
		},
	});

	return (
		<form
			className="flex flex-col gap-3 px-2"
			onSubmit={formik.handleSubmit}
		>
			<div className="flex gap-5">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="name" className="px-2">
						Name
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="name"
						placeholder="Account Name"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="email" className="px-2">
						E-mail
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="email"
						placeholder="Account Email"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="password" className="px-2">
						Password
					</label>
					<input
						onChange={formik.handleChange}
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
						type="password"
						id="password"
						placeholder="Account Password"
					/>
				</div>
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="country" className="px-2">
						Country
					</label>
					<CountrySelector
						onChange={formik.handleChange}
						id="country"
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border flex items-center"
					/>
				</div>
			</div>
			<div className="flex gap-5 ">
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="phone" className="px-2">
						Phone Number
					</label>
					<input
						onChange={formik.handleChange}
						type="tel"
						id="phone"
						placeholder="Ex: +911234567890"
						//pattern="/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="operator" className="px-2">
						Phone Operator
					</label>
					<select
						onChange={formik.handleChange}
						id="operator"
						className="h-[50px] pl-3 bg-transparent  rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option className="py-2" selected disabled>
							Select Operator
						</option>
						<option className="py-2" value="IAM">
							IAM
						</option>
						<option className="py-2" value="Orange">
							Orange
						</option>
						<option className="py-2" value="INWI">
							INWI
						</option>
						<option className="py-2" value="UNKOWN">
							UNKOWN
						</option>
					</select>
				</div>
			</div>
			<div className="flex">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="status" className="px-2">
						Status
					</label>
					<select
						onChange={formik.handleChange}
						id="status"
						name="status"
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option className="py-2" value="Live">
							Live
						</option>
						<option className="py-2" value="Deleted">
							Deleted
						</option>
					</select>
				</div>
			</div>
			<button
				type="submit"
				className="block px-4 py-3 ml-auto mr-3 font-normal text-white rounded-md my-7 bg-indigo"
			>
				Add A console
			</button>
		</form>
	);
};

export default ConsoleForm;

const CountrySelector = (props: any) => {
	return (
		<select {...props}>
			<option className="py-2" disabled selected>
				Select Account Country
			</option>
			<option className="py-2" value="Afghanistan">
				Afghanistan
			</option>
			<option className="py-2" value="Åland Islands">
				Åland Islands
			</option>
			<option className="py-2" value="Albania">
				Albania
			</option>
			<option className="py-2" value="Algeria">
				Algeria
			</option>
			<option className="py-2" value="American Samoa">
				American Samoa
			</option>
			<option className="py-2" value="Andorra">
				Andorra
			</option>
			<option className="py-2" value="Angola">
				Angola
			</option>
			<option className="py-2" value="Anguilla">
				Anguilla
			</option>
			<option className="py-2" value="Antarctica">
				Antarctica
			</option>
			<option className="py-2" value="Antigua and Barbuda">
				Antigua and Barbuda
			</option>
			<option className="py-2" value="Argentina">
				Argentina
			</option>
			<option className="py-2" value="Armenia">
				Armenia
			</option>
			<option className="py-2" value="Aruba">
				Aruba
			</option>
			<option className="py-2" value="Australia">
				Australia
			</option>
			<option className="py-2" value="Austria">
				Austria
			</option>
			<option className="py-2" value="Azerbaijan">
				Azerbaijan
			</option>
			<option className="py-2" value="Bahamas">
				Bahamas
			</option>
			<option className="py-2" value="Bahrain">
				Bahrain
			</option>
			<option className="py-2" value="Bangladesh">
				Bangladesh
			</option>
			<option className="py-2" value="Barbados">
				Barbados
			</option>
			<option className="py-2" value="Belarus">
				Belarus
			</option>
			<option className="py-2" value="Belgium">
				Belgium
			</option>
			<option className="py-2" value="Belize">
				Belize
			</option>
			<option className="py-2" value="Benin">
				Benin
			</option>
			<option className="py-2" value="Bermuda">
				Bermuda
			</option>
			<option className="py-2" value="Bhutan">
				Bhutan
			</option>
			<option className="py-2" value="Bolivia">
				Bolivia
			</option>
			<option className="py-2" value="Bosnia and Herzegovina">
				Bosnia and Herzegovina
			</option>
			<option className="py-2" value="Botswana">
				Botswana
			</option>
			<option className="py-2" value="Bouvet Island">
				Bouvet Island
			</option>
			<option className="py-2" value="Brazil">
				Brazil
			</option>
			<option className="py-2" value="British Indian Ocean Territory">
				British Indian Ocean Territory
			</option>
			<option className="py-2" value="Brunei Darussalam">
				Brunei Darussalam
			</option>
			<option className="py-2" value="Bulgaria">
				Bulgaria
			</option>
			<option className="py-2" value="Burkina Faso">
				Burkina Faso
			</option>
			<option className="py-2" value="Burundi">
				Burundi
			</option>
			<option className="py-2" value="Cambodia">
				Cambodia
			</option>
			<option className="py-2" value="Cameroon">
				Cameroon
			</option>
			<option className="py-2" value="Canada">
				Canada
			</option>
			<option className="py-2" value="Cape Verde">
				Cape Verde
			</option>
			<option className="py-2" value="Cayman Islands">
				Cayman Islands
			</option>
			<option className="py-2" value="Central African Republic">
				Central African Republic
			</option>
			<option className="py-2" value="Chad">
				Chad
			</option>
			<option className="py-2" value="Chile">
				Chile
			</option>
			<option className="py-2" value="China">
				China
			</option>
			<option className="py-2" value="Christmas Island">
				Christmas Island
			</option>
			<option className="py-2" value="Cocos (Keeling) Islands">
				Cocos (Keeling) Islands
			</option>
			<option className="py-2" value="Colombia">
				Colombia
			</option>
			<option className="py-2" value="Comoros">
				Comoros
			</option>
			<option className="py-2" value="Congo">
				Congo
			</option>
			<option
				className="py-2"
				value="Congo, The Democratic Republic of The"
			>
				Congo, The Democratic Republic of The
			</option>
			<option className="py-2" value="Cook Islands">
				Cook Islands
			</option>
			<option className="py-2" value="Costa Rica">
				Costa Rica
			</option>
			<option className="py-2" value="Cote D'ivoire">
				Cote D'ivoire
			</option>
			<option className="py-2" value="Croatia">
				Croatia
			</option>
			<option className="py-2" value="Cuba">
				Cuba
			</option>
			<option className="py-2" value="Cyprus">
				Cyprus
			</option>
			<option className="py-2" value="Czech Republic">
				Czech Republic
			</option>
			<option className="py-2" value="Denmark">
				Denmark
			</option>
			<option className="py-2" value="Djibouti">
				Djibouti
			</option>
			<option className="py-2" value="Dominica">
				Dominica
			</option>
			<option className="py-2" value="Dominican Republic">
				Dominican Republic
			</option>
			<option className="py-2" value="Ecuador">
				Ecuador
			</option>
			<option className="py-2" value="Egypt">
				Egypt
			</option>
			<option className="py-2" value="El Salvador">
				El Salvador
			</option>
			<option className="py-2" value="Equatorial Guinea">
				Equatorial Guinea
			</option>
			<option className="py-2" value="Eritrea">
				Eritrea
			</option>
			<option className="py-2" value="Estonia">
				Estonia
			</option>
			<option className="py-2" value="Ethiopia">
				Ethiopia
			</option>
			<option className="py-2" value="Falkland Islands (Malvinas)">
				Falkland Islands (Malvinas)
			</option>
			<option className="py-2" value="Faroe Islands">
				Faroe Islands
			</option>
			<option className="py-2" value="Fiji">
				Fiji
			</option>
			<option className="py-2" value="Finland">
				Finland
			</option>
			<option className="py-2" value="France">
				France
			</option>
			<option className="py-2" value="French Guiana">
				French Guiana
			</option>
			<option className="py-2" value="French Polynesia">
				French Polynesia
			</option>
			<option className="py-2" value="French Southern Territories">
				French Southern Territories
			</option>
			<option className="py-2" value="Gabon">
				Gabon
			</option>
			<option className="py-2" value="Gambia">
				Gambia
			</option>
			<option className="py-2" value="Georgia">
				Georgia
			</option>
			<option className="py-2" value="Germany">
				Germany
			</option>
			<option className="py-2" value="Ghana">
				Ghana
			</option>
			<option className="py-2" value="Gibraltar">
				Gibraltar
			</option>
			<option className="py-2" value="Greece">
				Greece
			</option>
			<option className="py-2" value="Greenland">
				Greenland
			</option>
			<option className="py-2" value="Grenada">
				Grenada
			</option>
			<option className="py-2" value="Guadeloupe">
				Guadeloupe
			</option>
			<option className="py-2" value="Guam">
				Guam
			</option>
			<option className="py-2" value="Guatemala">
				Guatemala
			</option>
			<option className="py-2" value="Guernsey">
				Guernsey
			</option>
			<option className="py-2" value="Guinea">
				Guinea
			</option>
			<option className="py-2" value="Guinea-bissau">
				Guinea-bissau
			</option>
			<option className="py-2" value="Guyana">
				Guyana
			</option>
			<option className="py-2" value="Haiti">
				Haiti
			</option>
			<option className="py-2" value="Heard Island and Mcdonald Islands">
				Heard Island and Mcdonald Islands
			</option>
			<option className="py-2" value="Holy See (Vatican City State)">
				Holy See (Vatican City State)
			</option>
			<option className="py-2" value="Honduras">
				Honduras
			</option>
			<option className="py-2" value="Hong Kong">
				Hong Kong
			</option>
			<option className="py-2" value="Hungary">
				Hungary
			</option>
			<option className="py-2" value="Iceland">
				Iceland
			</option>
			<option className="py-2" value="India">
				India
			</option>
			<option className="py-2" value="Indonesia">
				Indonesia
			</option>
			<option className="py-2" value="Iran, Islamic Republic of">
				Iran, Islamic Republic of
			</option>
			<option className="py-2" value="Iraq">
				Iraq
			</option>
			<option className="py-2" value="Ireland">
				Ireland
			</option>
			<option className="py-2" value="Isle of Man">
				Isle of Man
			</option>
			<option className="py-2" value="Israel">
				Israel
			</option>
			<option className="py-2" value="Italy">
				Italy
			</option>
			<option className="py-2" value="Jamaica">
				Jamaica
			</option>
			<option className="py-2" value="Japan">
				Japan
			</option>
			<option className="py-2" value="Jersey">
				Jersey
			</option>
			<option className="py-2" value="Jordan">
				Jordan
			</option>
			<option className="py-2" value="Kazakhstan">
				Kazakhstan
			</option>
			<option className="py-2" value="Kenya">
				Kenya
			</option>
			<option className="py-2" value="Kiribati">
				Kiribati
			</option>
			<option
				className="py-2"
				value="Korea, Democratic People's Republic of"
			>
				Korea, Democratic People's Republic of
			</option>
			<option className="py-2" value="Korea, Republic of">
				Korea, Republic of
			</option>
			<option className="py-2" value="Kuwait">
				Kuwait
			</option>
			<option className="py-2" value="Kyrgyzstan">
				Kyrgyzstan
			</option>
			<option className="py-2" value="Lao People's Democratic Republic">
				Lao People's Democratic Republic
			</option>
			<option className="py-2" value="Latvia">
				Latvia
			</option>
			<option className="py-2" value="Lebanon">
				Lebanon
			</option>
			<option className="py-2" value="Lesotho">
				Lesotho
			</option>
			<option className="py-2" value="Liberia">
				Liberia
			</option>
			<option className="py-2" value="Libyan Arab Jamahiriya">
				Libyan Arab Jamahiriya
			</option>
			<option className="py-2" value="Liechtenstein">
				Liechtenstein
			</option>
			<option className="py-2" value="Lithuania">
				Lithuania
			</option>
			<option className="py-2" value="Luxembourg">
				Luxembourg
			</option>
			<option className="py-2" value="Macao">
				Macao
			</option>
			<option
				className="py-2"
				value="Macedonia, The Former Yugoslav Republic of"
			>
				Macedonia, The Former Yugoslav Republic of
			</option>
			<option className="py-2" value="Madagascar">
				Madagascar
			</option>
			<option className="py-2" value="Malawi">
				Malawi
			</option>
			<option className="py-2" value="Malaysia">
				Malaysia
			</option>
			<option className="py-2" value="Maldives">
				Maldives
			</option>
			<option className="py-2" value="Mali">
				Mali
			</option>
			<option className="py-2" value="Malta">
				Malta
			</option>
			<option className="py-2" value="Marshall Islands">
				Marshall Islands
			</option>
			<option className="py-2" value="Martinique">
				Martinique
			</option>
			<option className="py-2" value="Mauritania">
				Mauritania
			</option>
			<option className="py-2" value="Mauritius">
				Mauritius
			</option>
			<option className="py-2" value="Mayotte">
				Mayotte
			</option>
			<option className="py-2" value="Mexico">
				Mexico
			</option>
			<option className="py-2" value="Micronesia, Federated States of">
				Micronesia, Federated States of
			</option>
			<option className="py-2" value="Moldova, Republic of">
				Moldova, Republic of
			</option>
			<option className="py-2" value="Monaco">
				Monaco
			</option>
			<option className="py-2" value="Mongolia">
				Mongolia
			</option>
			<option className="py-2" value="Montenegro">
				Montenegro
			</option>
			<option className="py-2" value="Montserrat">
				Montserrat
			</option>
			<option className="py-2" value="Morocco">
				Morocco
			</option>
			<option className="py-2" value="Mozambique">
				Mozambique
			</option>
			<option className="py-2" value="Myanmar">
				Myanmar
			</option>
			<option className="py-2" value="Namibia">
				Namibia
			</option>
			<option className="py-2" value="Nauru">
				Nauru
			</option>
			<option className="py-2" value="Nepal">
				Nepal
			</option>
			<option className="py-2" value="Netherlands">
				Netherlands
			</option>
			<option className="py-2" value="Netherlands Antilles">
				Netherlands Antilles
			</option>
			<option className="py-2" value="New Caledonia">
				New Caledonia
			</option>
			<option className="py-2" value="New Zealand">
				New Zealand
			</option>
			<option className="py-2" value="Nicaragua">
				Nicaragua
			</option>
			<option className="py-2" value="Niger">
				Niger
			</option>
			<option className="py-2" value="Nigeria">
				Nigeria
			</option>
			<option className="py-2" value="Niue">
				Niue
			</option>
			<option className="py-2" value="Norfolk Island">
				Norfolk Island
			</option>
			<option className="py-2" value="Northern Mariana Islands">
				Northern Mariana Islands
			</option>
			<option className="py-2" value="Norway">
				Norway
			</option>
			<option className="py-2" value="Oman">
				Oman
			</option>
			<option className="py-2" value="Pakistan">
				Pakistan
			</option>
			<option className="py-2" value="Palau">
				Palau
			</option>
			<option className="py-2" value="Palestinian Territory, Occupied">
				Palestinian Territory, Occupied
			</option>
			<option className="py-2" value="Panama">
				Panama
			</option>
			<option className="py-2" value="Papua New Guinea">
				Papua New Guinea
			</option>
			<option className="py-2" value="Paraguay">
				Paraguay
			</option>
			<option className="py-2" value="Peru">
				Peru
			</option>
			<option className="py-2" value="Philippines">
				Philippines
			</option>
			<option className="py-2" value="Pitcairn">
				Pitcairn
			</option>
			<option className="py-2" value="Poland">
				Poland
			</option>
			<option className="py-2" value="Portugal">
				Portugal
			</option>
			<option className="py-2" value="Puerto Rico">
				Puerto Rico
			</option>
			<option className="py-2" value="Qatar">
				Qatar
			</option>
			<option className="py-2" value="Reunion">
				Reunion
			</option>
			<option className="py-2" value="Romania">
				Romania
			</option>
			<option className="py-2" value="Russian Federation">
				Russian Federation
			</option>
			<option className="py-2" value="Rwanda">
				Rwanda
			</option>
			<option className="py-2" value="Saint Helena">
				Saint Helena
			</option>
			<option className="py-2" value="Saint Kitts and Nevis">
				Saint Kitts and Nevis
			</option>
			<option className="py-2" value="Saint Lucia">
				Saint Lucia
			</option>
			<option className="py-2" value="Saint Pierre and Miquelon">
				Saint Pierre and Miquelon
			</option>
			<option className="py-2" value="Saint Vincent and The Grenadines">
				Saint Vincent and The Grenadines
			</option>
			<option className="py-2" value="Samoa">
				Samoa
			</option>
			<option className="py-2" value="San Marino">
				San Marino
			</option>
			<option className="py-2" value="Sao Tome and Principe">
				Sao Tome and Principe
			</option>
			<option className="py-2" value="Saudi Arabia">
				Saudi Arabia
			</option>
			<option className="py-2" value="Senegal">
				Senegal
			</option>
			<option className="py-2" value="Serbia">
				Serbia
			</option>
			<option className="py-2" value="Seychelles">
				Seychelles
			</option>
			<option className="py-2" value="Sierra Leone">
				Sierra Leone
			</option>
			<option className="py-2" value="Singapore">
				Singapore
			</option>
			<option className="py-2" value="Slovakia">
				Slovakia
			</option>
			<option className="py-2" value="Slovenia">
				Slovenia
			</option>
			<option className="py-2" value="Solomon Islands">
				Solomon Islands
			</option>
			<option className="py-2" value="Somalia">
				Somalia
			</option>
			<option className="py-2" value="South Africa">
				South Africa
			</option>
			<option
				className="py-2"
				value="South Georgia and The South Sandwich Islands"
			>
				South Georgia and The South Sandwich Islands
			</option>
			<option className="py-2" value="Spain">
				Spain
			</option>
			<option className="py-2" value="Sri Lanka">
				Sri Lanka
			</option>
			<option className="py-2" value="Sudan">
				Sudan
			</option>
			<option className="py-2" value="Suriname">
				Suriname
			</option>
			<option className="py-2" value="Svalbard and Jan Mayen">
				Svalbard and Jan Mayen
			</option>
			<option className="py-2" value="Swaziland">
				Swaziland
			</option>
			<option className="py-2" value="Sweden">
				Sweden
			</option>
			<option className="py-2" value="Switzerland">
				Switzerland
			</option>
			<option className="py-2" value="Syrian Arab Republic">
				Syrian Arab Republic
			</option>
			<option className="py-2" value="Taiwan">
				Taiwan
			</option>
			<option className="py-2" value="Tajikistan">
				Tajikistan
			</option>
			<option className="py-2" value="Tanzania, United Republic of">
				Tanzania, United Republic of
			</option>
			<option className="py-2" value="Thailand">
				Thailand
			</option>
			<option className="py-2" value="Timor-leste">
				Timor-leste
			</option>
			<option className="py-2" value="Togo">
				Togo
			</option>
			<option className="py-2" value="Tokelau">
				Tokelau
			</option>
			<option className="py-2" value="Tonga">
				Tonga
			</option>
			<option className="py-2" value="Trinidad and Tobago">
				Trinidad and Tobago
			</option>
			<option className="py-2" value="Tunisia">
				Tunisia
			</option>
			<option className="py-2" value="Turkey">
				Turkey
			</option>
			<option className="py-2" value="Turkmenistan">
				Turkmenistan
			</option>
			<option className="py-2" value="Turks and Caicos Islands">
				Turks and Caicos Islands
			</option>
			<option className="py-2" value="Tuvalu">
				Tuvalu
			</option>
			<option className="py-2" value="Uganda">
				Uganda
			</option>
			<option className="py-2" value="Ukraine">
				Ukraine
			</option>
			<option className="py-2" value="United Arab Emirates">
				United Arab Emirates
			</option>
			<option className="py-2" value="United Kingdom">
				United Kingdom
			</option>
			<option className="py-2" value="United States">
				United States
			</option>
			<option
				className="py-2"
				value="United States Minor Outlying Islands"
			>
				United States Minor Outlying Islands
			</option>
			<option className="py-2" value="Uruguay">
				Uruguay
			</option>
			<option className="py-2" value="Uzbekistan">
				Uzbekistan
			</option>
			<option className="py-2" value="Vanuatu">
				Vanuatu
			</option>
			<option className="py-2" value="Venezuela">
				Venezuela
			</option>
			<option className="py-2" value="Viet Nam">
				Viet Nam
			</option>
			<option className="py-2" value="Virgin Islands, British">
				Virgin Islands, British
			</option>
			<option className="py-2" value="Virgin Islands, U.S.">
				Virgin Islands, U.S.
			</option>
			<option className="py-2" value="Wallis and Futuna">
				Wallis and Futuna
			</option>
			<option className="py-2" value="Western Sahara">
				Western Sahara
			</option>
			<option className="py-2" value="Yemen">
				Yemen
			</option>
			<option className="py-2" value="Zambia">
				Zambia
			</option>
			<option className="py-2" value="Zimbabwe">
				Zimbabwe
			</option>
		</select>
	);
};
