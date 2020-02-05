import React from 'react'
import TariffItem from '../TariffItem/TariffItem'

export default function TariffList() {
		const tarifs = [
		   {id: 1, title: "Везде онлайн", price: 500, moneyPrice: '₽', monthPrice: '/месяц', hit: true, hitUrl: 'http://turegion.ru/wp-content/uploads/2018/10/4abcbbdcbf4c980d229c7f7335.png', traffik: 40, traffikName: 'ГБ', social: '+безлимитные', 
		   																																		  socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',], 
		   																																					   roaming: false, minutes: 800, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: 50, messageName: 'SMS'},
			{id: 2, title: "Мой онлайн", price: 400, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 15, traffikName: 'ГБ', social: '+безлимитные',  socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   roaming: false, minutes: 500, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: false, messageName: 'SMS'},
			{id: 3, title: "Мой онлайн +", price: 700, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 30, traffikName: 'ГБ', social: '+безлимитные', socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   roaming: 'интернет за границей', minutes: 800, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: false, messageName: 'SMS'},

   		   {id: 4, title: "Мой разговор", price: 200, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 2, traffikName: 'ГБ', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					    roaming: false, minutes: 200, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: false, messageName: 'SMS'},

   		   {id: 5, title: "Мой Tele2", price: 7, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 5, traffikName: 'ГБ', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   roaming: false, minutes: 0, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: false, messageName: 'SMS'},

		   {id: 6, title: "Безлимит", price: 650, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 'БЕЗЛИМИТНЫЙ ИНТЕРНЕТ', traffikName: 'ГБ', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   roaming: false, minutes: 500, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: 50, messageName: 'SMS'},

		   {id: 7, title: "Премиум", price: 1500, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 50, traffikName: 'ГБ', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   roaming: false, minutes: 2000, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: 500, messageName: 'SMS'},

		   	{id: 8, title: "Безлимит", price: 650, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 'БЕЗЛИМИТНЫЙ ИНТЕРНЕТ', traffikName: '', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					    roaming: false, minutes: 500, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: 50, messageName: 'SMS'},

		   	{id: 9, title: "Премиум", price: 1500, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: '50', traffikName: 'ГБ', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					    roaming: false, minutes: 2000, minutesTraffik: 'мин', minutesUnlimit: '+безлимит на Tele2 России', message: 500, messageName: 'SMS'},

		   	{id: 10, title: "Классический", money: 'Без абонентской платы', price: false, monthPrice: '', hit: false, traffik: false, traffikName: '', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   	roaming: false, minutes: false, minutesTraffik: '', minutesUnlimit: '', message: false, messageName: 'SMS'},

		   	{id: 11, title: "Интернет для устройств", money: 'Без абонентской платы', price: false, monthPrice: '', hit: false, traffik: false, traffikName: '', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   	roaming: false, minutes: false, minutesTraffik: '', minutesUnlimit: '', message: false, messageName: 'SMS'},


		   	{id: 11, title: "Интернет для вещей", price: 100, moneyPrice: '₽', monthPrice: 'месяц', hit: false, traffik: 300, traffikName: 'Мб', social: false, socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
		   																																					   'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',],
		   																																					   	roaming: false, minutes: 30, minutesTraffik: 'мин', minutesUnlimit: '', message: 100, messageName: 'SMS'},																																	   																																		   	

		   																		];   												
	return (
		<>
		 <div className="tarifs">Тарифы</div>
		 <div>
		 {tarifs.map(o => <TariffItem tarrif={o} />)}
		 </div>
		 </>
		)
}
