import React from 'react'


function TariffItem({tarrif}){

	 const socialIcons = <div>{tarrif.socialMedia.map(o => <img src={o} alt="ScialIcons" className="icons"/> )}</div>;

	return(
		<>
		<div className="main">

		<div className="block">
			<h3 className="title">{tarrif.title}</h3>
			<h4 className="money">{tarrif.money}</h4>

			<div className="price">{tarrif.price}
				<div className="right">
					<div className="rouble">{tarrif.moneyPrice}</div>
					<div className="monthPrice">{tarrif.monthPrice}</div>
				</div>
			</div>
			
			{tarrif.hit && <img src={tarrif.hitUrl} alt="hitPic" className="socialMedia" />}
			<div className="roaming">{tarrif.roaming}</div>
		</div>
			
			<div className="block">

				<h3 className="traffik">{tarrif.traffik}
				<span>{tarrif.traffikName}</span>
				</h3>
				<div>{tarrif.social}</div>
				<div className="socialIcons">{tarrif.social && socialIcons}</div>		
				<div>{tarrif.roaming}</div>
			</div>
				
			<div className="block">

				<p className="minutes">{tarrif.minutes}
				<span className="minutesTraffik">{tarrif.minutesTraffik}</span>
				 </p>
				<div className="unlim">{tarrif.minutesUnlimit}</div>
			</div>
			
			<div className="block">
				<h3 className="message">{tarrif.message}
				<span className="messageName">{tarrif.message && tarrif.messageName}</span>
				</h3>
			</div>

		</div>
	
		</>
		)
}

export default TariffItem;