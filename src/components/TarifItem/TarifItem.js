import React from 'react'


function TarifItem({tarrifs}){

	 const socialIcons = <div>{tarrifs.socialMedia.map(o => <img src={o} className="icons"/> )}</div>;

	return(
		<>
		<div className="main">

		<div className="block">
			<h3 className="title">{tarrifs.title}</h3>
			<h4 className="money">{tarrifs.money}</h4>

			<div className="price">{tarrifs.price}
				<div className="right">
					<div className="rouble">{tarrifs.moneyPrice}</div>
					<div className="monthPrice">{tarrifs.monthPrice}</div>
				</div>
			</div>
			
			{tarrifs.hit && <img src={tarrifs.hitUrl} className="socialMedia" />}
			<div className="roaming">{tarrifs.roaming}</div>
		</div>
			
			<div className="block">

				<h3 className="traffik">{tarrifs.traffik}
				<span>{tarrifs.traffikName}</span>
				</h3>
				<div>{tarrifs.social}</div>
				<div className="socialIcons">{tarrifs.social && socialIcons}</div>		
				<div>{tarrifs.roaming}</div>
			</div>
				
			<div className="block">

				<p className="minutes">{tarrifs.minutes}
				<span className="minutesTraffik">{tarrifs.minutesTraffik}</span>
				 </p>
				<div className="unlim">{tarrifs.minutesUnlimit}</div>
			</div>
			
			<div className="block">
				<h3 className="message">{tarrifs.message}
				<span className="messageName">{tarrifs.message && tarrifs.messageName}</span>
				</h3>
			</div>

		</div>
	
		</>
		)
}

export default TarifItem;