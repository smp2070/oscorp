import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesAnalytics = () => {
  const { analytics } = window.servicesInner
  return (
		<Overdrive id="test">
			<div className="analytics">
				<div className="analytics__inner container">
					<div className="servhead" style={{backgroundImage: `url(${analytics.img})`}}>
						<div className="servhead__inner">
							<h1 className="servhead__title">{ analytics.title }</h1>
							<p className="servhead__descr">{ analytics.descr }</p>
						</div>
					</div>
					<div className="analytics__content">
						<div className="analytics__info">
							<div className="analytics__info-lside">
								<div className="analytics__info-head">
									<h2 className="analytics__info-title">аналитическое сопровождение сайта</h2>
									<p className="analytics__info-subtitle">Что такое аналитическое сопровождение сайта и для чего оно нужно?</p>
								</div>
								<div className="analytics__info-descr">Аналитическое сопровождение — эффективный способ повышения уровня продаж сайта без дополнительных рекламных инвестиций. Повышение конверсии будет отображаться в увеличении количества регистраций на сайте, скачиваний каталога или прайс-листа, позвонивших, оформлений подписки на рассылку, заявок в форме обратной связи, покупок (для интернет-магазина), величины среднего чека и во многих других функциях.</div>
							</div>
							<div className="analytics__info-rside">
								<figure className="analytics__info-img"><img src="/img/service-analytics/analytics_info-img.jpg" alt=""/></figure>
							</div>
						</div>
						<div className="analytics__whyus">
							<div className="analytics__whyus-title">почему мы?</div>
							<ul className="analytics__whyus-list">
								<li>
									<figure><img src="/img/service-analytics/analytics_whyus-1.jpg" alt="1"/></figure>
									<p>Специалисты прошли сертификацию Google Analytics IQ</p>
								</li>
								<li>
									<figure><img src="/img/service-analytics/analytics_whyus-2.jpg" alt="2"/></figure>
									<p>Индивидуальный подход к каждому клиенту</p>
								</li>
								<li>
									<figure><img src="/img/service-analytics/analytics_whyus-3.jpg" alt="3"/></figure>
									<p>Комплексные услуги интернет-маркетинга</p>
								</li>
								<li>
									<figure><img src="/img/service-analytics/analytics_whyus-4.jpg" alt="4"/></figure>
									<p>Доступные цены каждому, приятные бонусы и акции</p>
								</li>
							</ul>
						</div>
						<div className="analytics__stages">
							<div className="analytics__stages-title">этапы работы</div>
								<ul className="analytics__stages-list">
									<li>
										<figure><img src="/img/service-analytics/analytics_stage-1.png" alt="1"/></figure>
										<p>Тщательное изучение веб-ресурса, после которого специалистами нашей компани будет создан план действий, направленных на увеличение эффективности рекламы и работы сайта в целом.</p>
									</li>
									<li>
										<figure><img src="/img/service-analytics/analytics_stage-2.png" alt="2"/></figure>
										<p>Проанализировав и определив целевые действия посетителей, установим и настроим Яндекс.Метрику, GoogleAnalytics.</p>
									</li>
									<li>
										<figure><img src="/img/service-analytics/analytics_stage-3.png" alt="3"/></figure>
										<p>Осуществляем мониторинг и анализ показателей сайта.</p>
									</li>
									<li>
										<figure><img src="/img/service-analytics/analytics_stage-4.png" alt="4"/></figure>
										<p>Ежемесячный отчет, где будет содержаться оценка динамики различных показателей эффективности, эффекта введенных изменений, а также рекомендации по дальнейшему увеличению «отдачи» от сайта.</p>
									</li>
								</ul>
						</div>
						<div className="analytics__types">
							<div className="analytics__types-title">аналитическое сопровождение сайта включает следующие виды работ:</div>
								<ul className="analytics__types-list">
									<li>
										<p>Грамотная настройка счетчиков статистики Яндекс.Метрика и GoogleAnalytics (настройка электронной коммерции, фильтров, целей, создание пользовательских отчетов и т.д.).</p>
									</li>
									<li>
										<p>Постоянный анализ и мониторинг сайта в целом, поведения пользователей на нем в частности.</p>
									</li>
									<li>
										<p>Анализ источников трафика. Предоставление рекомендаций по увеличению эффективности работы сайта, корректировке рекламных бюджетов.</p>
									</li>
									<li>
										<p>Проведение мультитестирований веб-ресурса для определения оптимального варианта отображения элемента или страницы.</p>
									</li>
									<li>
										<p>Обучение сотрудников вашей компании работе с перечисленными системами анализа получаемой информации.</p>
									</li>
								</ul>
						</div>
					</div>
				</div>
				<Boxes/>
			</div>
		</Overdrive>
  )
};
export default ServicesAnalytics;
