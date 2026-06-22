// Tabela de ícones SVG inline (substitui a antiga webfont/mask-image,
// que não funciona de forma confiável no Safari iOS quando o app é
// aberto como arquivo local/PWA). Usada para ícones cujo nome só é
// conhecido em tempo de execução (ex: categoria de gasto dinâmica).
const ICON_PATHS = {"alert-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M12 8v4" /> <path d="M12 16h.01" />`,"arrow-down-circle":`<path d="M12 7v14" /> <path d="M9 18l3 3l3 -3" /> <path d="M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />`,"arrow-left":`<path d="M5 12l14 0" /> <path d="M5 12l6 6" /> <path d="M5 12l6 -6" />`,"arrow-up-circle":`<path d="M12 17v-14" /> <path d="M15 6l-3 -3l-3 3" /> <path d="M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />`,"barbell":`<path d="M2 12h1" /> <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /> <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" /> <path d="M9 12h6" /> <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" /> <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /> <path d="M22 12h-1" />`,"bell-ringing":`<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /> <path d="M9 17v1a3 3 0 0 0 6 0v-1" /> <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" /> <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />`,"bike":`<path d="M2 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /> <path d="M16 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /> <path d="M12 19v-4l-3 -3l5 -4l2 3h3" /> <path d="M13.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />`,"bolt":`<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />`,"book":`<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6l0 13" /> <path d="M12 6l0 13" /> <path d="M21 6l0 13" />`,"brain":`<path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" /> <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" /> <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" /> <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" /> <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" /> <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />`,"brand-amazon":`<path d="M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" /> <path d="M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />`,"brand-whatsapp":`<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />`,"briefcase":`<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /> <path d="M12 12l0 .01" /> <path d="M3 13a20 20 0 0 0 18 0" />`,"building":`<path d="M3 21l18 0" /> <path d="M9 8l1 0" /> <path d="M9 12l1 0" /> <path d="M9 16l1 0" /> <path d="M14 8l1 0" /> <path d="M14 12l1 0" /> <path d="M14 16l1 0" /> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />`,"building-store":`<path d="M3 21l18 0" /> <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /> <path d="M5 21l0 -10.15" /> <path d="M19 21l0 -10.15" /> <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />`,"calendar":`<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /> <path d="M16 3v4" /> <path d="M8 3v4" /> <path d="M4 11h16" /> <path d="M11 15h1" /> <path d="M12 15v3" />`,"calendar-repeat":`<path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" /> <path d="M16 3v4" /> <path d="M8 3v4" /> <path d="M4 11h12" /> <path d="M20 14l2 2h-3" /> <path d="M20 18l2 -2" /> <path d="M19 16a3 3 0 1 0 2 5.236" />`,"camera":`<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /> <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />`,"car":`<path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />`,"certificate":`<path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /> <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /> <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /> <path d="M6 9l12 0" /> <path d="M6 12l3 0" /> <path d="M6 15l2 0" />`,"chart-donut-3":`<path d="M12 3v5m4 4h5" /> <path d="M8.929 14.582l-3.429 2.918" /> <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />`,"chart-line":`<path d="M4 19l16 0" /> <path d="M4 15l4 -6l4 2l4 -5l4 4" />`,"chart-pie-2":`<path d="M12 3v9h9" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />`,"check":`<path d="M5 12l5 5l10 -10" />`,"chevron-down":`<path d="M6 9l6 6l6 -6" />`,"chevron-left":`<path d="M15 6l-6 6l6 6" />`,"chevron-right":`<path d="M9 6l6 6l-6 6" />`,"circle-check":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M9 12l2 2l4 -4" />`,"clock":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M12 7v5l3 3" />`,"coffee":`<path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /> <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /> <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /> <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" /> <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />`,"coin":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /> <path d="M12 7v10" />`,"credit-card":`<path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" /> <path d="M3 10l18 0" /> <path d="M7 15l.01 0" /> <path d="M11 15l2 0" />`,"credit-card-off":`<path d="M3 3l18 18" /> <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" /> <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" /> <path d="M3 11l8 0" /> <path d="M15 11l6 0" /> <path d="M7 15l.01 0" /> <path d="M11 15l2 0" />`,"crown":`<path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6" />`,"database-export":`<path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /> <path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" /> <path d="M20 12v-6" /> <path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" /> <path d="M16 19h6" /> <path d="M19 16l3 3l-3 3" />`,"device-mobile":`<path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" /> <path d="M11 4h2" /> <path d="M12 17v.01" />`,"device-tv":`<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /> <path d="M16 3l-4 4l-4 -4" />`,"dots":`<path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />`,"dots-circle-horizontal":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M8 12l0 .01" /> <path d="M12 12l0 .01" /> <path d="M16 12l0 .01" />`,"download":`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /> <path d="M7 11l5 5l5 -5" /> <path d="M12 4l0 12" />`,"droplet":`<path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />`,"droplet-half-2":`<path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" /> <path d="M5 14h14" />`,"eye":`<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />`,"eye-off":`<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /> <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /> <path d="M3 3l18 18" />`,"filter":`<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />`,"first-aid-kit":`<path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /> <path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" /> <path d="M10 14h4" /> <path d="M12 12v4" />`,"gas-station":`<path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /> <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /> <path d="M3 20l12 0" /> <path d="M18 7v1a1 1 0 0 0 1 1h1" /> <path d="M4 11l10 0" />`,"gauge":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M13.41 10.59l2.59 -2.59" /> <path d="M7 12a5 5 0 0 1 5 -5" />`,"gift":`<path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" /> <path d="M12 8l0 13" /> <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /> <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />`,"glass-cocktail":`<path d="M8 21h8" /> <path d="M12 15v6" /> <path d="M5 5a7 2 0 1 0 14 0a7 2 0 1 0 -14 0" /> <path d="M5 5v.388c0 .432 .126 .853 .362 1.206l5 7.509c.633 .951 1.88 1.183 2.785 .517c.191 -.141 .358 -.316 .491 -.517l5 -7.509c.236 -.353 .362 -.774 .362 -1.206v-.388" />`,"hand-finger":`<path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /> <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" /> <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /> <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />`,"hand-heart":`<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /> <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /> <path d="M12.5 15.5l2 2" /> <path d="M15 13l2 2" />`,"heart":`<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />`,"help-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M12 16v.01" /> <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />`,"home":`<path d="M5 12l-2 0l9 -9l9 9l-2 0" /> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /> <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />`,"home-2":`<path d="M5 12l-2 0l9 -9l9 9l-2 0" /> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /> <path d="M10 12h4v4h-4l0 -4" />`,"laptop":`<path d="M3 19l18 0" /> <path d="M5 7a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8" />`,"layout-dashboard":`<path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /> <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /> <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /> <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />`,"layout-grid":`<path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" /> <path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" /> <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" /> <path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />`,"list-check":`<path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /> <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /> <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /> <path d="M11 6l9 0" /> <path d="M11 12l9 0" /> <path d="M11 18l9 0" />`,"list-numbers":`<path d="M11 6h9" /> <path d="M11 12h9" /> <path d="M12 18h8" /> <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /> <path d="M6 10v-6l-2 2" />`,"logout":`<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /> <path d="M9 12h12l-3 -3" /> <path d="M18 15l3 -3" />`,"message-circle-2":`<path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />`,"messages-off":`<path d="M3 3l18 18" /> <path d="M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3" /> <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />`,"minus":`<path d="M5 12l14 0" />`,"mood-happy":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M9 9l.01 0" /> <path d="M15 9l.01 0" /> <path d="M8 13a4 4 0 1 0 8 0h-8" />`,"movie":`<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" /> <path d="M8 4l0 16" /> <path d="M16 4l0 16" /> <path d="M4 8l4 0" /> <path d="M4 16l4 0" /> <path d="M4 12l16 0" /> <path d="M16 8l4 0" /> <path d="M16 16l4 0" />`,"package":`<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /> <path d="M12 12l8 -4.5" /> <path d="M12 12l0 9" /> <path d="M12 12l-8 -4.5" /> <path d="M16 5.25l-8 4.5" />`,"palette":`<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /> <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />`,"parking-circle":`<path d="M10 16v-8h3.334c.92 0 1.666 .895 1.666 2s-.746 2 -1.666 2h-3.334" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />`,"paw":`<path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538" /> <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052l-.001 0" /> <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267" /> <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267" /> <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082" />`,"pill":`<path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" /> <path d="M8.5 8.5l7 7" />`,"plane":`<path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3l4 7" />`,"plus":`<path d="M12 5l0 14" /> <path d="M5 12l14 0" />`,"receipt-2":`<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /> <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />`,"receipt-tax":`<path d="M9 14l6 -6" /> <path d="M9 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" /> <path d="M14 13.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" /> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />`,"refresh-alert":`<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /> <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /> <path d="M12 9l0 3" /> <path d="M12 15l.01 0" />`,"repeat":`<path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /> <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />`,"school":`<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /> <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />`,"scissors":`<path d="M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /> <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /> <path d="M8.6 8.6l10.4 10.4" /> <path d="M8.6 15.4l10.4 -10.4" />`,"search":`<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /> <path d="M21 21l-6 -6" />`,"send":`<path d="M10 14l11 -11" /> <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />`,"shirt":`<path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />`,"shoe":`<path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" /> <path d="M14 13l1 -2" /> <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" /> <path d="M10 12l1.5 -3" />`,"shopping-bag":`<path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" /> <path d="M9 11v-5a3 3 0 0 1 6 0v5" />`,"shopping-cart":`<path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l14 1l-1 7h-13" />`,"sofa":`<path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2" /> <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" /> <path d="M12 5v9" />`,"sparkles":`<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />`,"spray":`<path d="M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7" /> <path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" /> <path d="M15 7h.01" /> <path d="M18 9h.01" /> <path d="M18 5h.01" /> <path d="M21 3h.01" /> <path d="M21 7h.01" /> <path d="M21 11h.01" /> <path d="M10 7h1" />`,"tag":`<path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />`,"target":`<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />`,"target-off":`<path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" /> <path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" /> <path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" /> <path d="M3 3l18 18" />`,"ticket":`<path d="M15 5l0 2" /> <path d="M15 11l0 2" /> <path d="M15 17l0 2" /> <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />`,"tools-kitchen-2":`<path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />`,"trash":`<path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />`,"trending-up":`<path d="M3 17l6 -6l4 4l8 -8" /> <path d="M14 7l7 0l0 7" />`,"trophy":`<path d="M8 21l8 0" /> <path d="M12 17l0 4" /> <path d="M7 4l10 0" /> <path d="M17 4v8a5 5 0 0 1 -10 0v-8" /> <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />`,"upload":`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /> <path d="M7 9l5 -5l5 5" /> <path d="M12 4l0 12" />`,"user":`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />`,"user-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /> <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />`,"user-edit":`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /> <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />`,"wallet":`<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" /> <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />`,"wifi":`<path d="M12 18l.01 0" /> <path d="M9.172 15.172a4 4 0 0 1 5.656 0" /> <path d="M6.343 12.343a8 8 0 0 1 11.314 0" /> <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />`,"x":`<path d="M18 6l-12 12" /> <path d="M6 6l12 12" />`};
function iconSvg(classNameFull, extraAttrs) {
  // classNameFull pode vir como "ti-NOME" ou só "NOME"
  const name = classNameFull.startsWith('ti-') ? classNameFull.slice(3) : classNameFull;
  const paths = ICON_PATHS[name] || '';
  const attrs = extraAttrs || '';
  return `<svg class="ti ti-${name}" ${attrs} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

const STORE_KEY = "fina_v12";

// ── TEMAS — cada um define todo o sistema de cor ──
// ══════════════════════════════════
// SISTEMA DE CORES — accent (matiz) + modo claro/escuro (independentes)
// ══════════════════════════════════
// Cada ACCENT define apenas a cor-base (hex). Todo o resto (variações claras,
// escuras, fundo, cinzas) é derivado matematicamente, garantindo que cada
// cor tenha sua própria identidade e nunca fique parecida com outra — e que
// QUALQUER cor funcione tanto no modo claro quanto no escuro.
function hexToRgb(hex){
  hex = hex.replace('#','');
  return { r: parseInt(hex.substr(0,2),16), g: parseInt(hex.substr(2,2),16), b: parseInt(hex.substr(4,2),16) };
}
function rgbToHex(r,g,b){
  const h = v => Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0');
  return '#' + h(r) + h(g) + h(b);
}
function hexToHsl(hex){
  let {r,g,b} = hexToRgb(hex);
  r/=255; g/=255; b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h=0, s=0; const l=(max+min)/2;
  const d = max-min;
  if(d>0){
    s = d/(1-Math.abs(2*l-1));
    if(max===r) h = 60*(((g-b)/d)%6);
    else if(max===g) h = 60*((b-r)/d+2);
    else h = 60*((r-g)/d+4);
  }
  if(h<0) h+=360;
  return {h, s:s*100, l:l*100};
}
function hslToHex(h,s,l){
  h=((h%360)+360)%360; s=Math.max(0,Math.min(100,s))/100; l=Math.max(0,Math.min(100,l))/100;
  const c=(1-Math.abs(2*l-1))*s, x=c*(1-Math.abs((h/60)%2-1)), m=l-c/2;
  let r=0,g=0,b=0;
  if(h<60){r=c;g=x;b=0;} else if(h<120){r=x;g=c;b=0;} else if(h<180){r=0;g=c;b=x;}
  else if(h<240){r=0;g=x;b=c;} else if(h<300){r=x;g=0;b=c;} else {r=c;g=0;b=x;}
  return rgbToHex((r+m)*255,(g+m)*255,(b+m)*255);
}
function rgba(hex, alpha){
  const {r,g,b} = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

// 16 cores — espaçadas no círculo cromático para nunca ficarem parecidas.
const ACCENTS = [
  { name:"Rosa",     hex:"#E13282" },
  { name:"Vinho",     hex:"#9B1239" },
  { name:"Coral",     hex:"#EA580C" },
  { name:"Pêssego",   hex:"#FDBA74" },
  { name:"Dourado",   hex:"#B8860B" },
  { name:"Marrom",    hex:"#78350F" },
  { name:"Verde",     hex:"#16A34A" },
  { name:"Esmeralda", hex:"#A7F3D0" },
  { name:"Azul",      hex:"#1D4ED8" },
  { name:"Azul Claro", hex:"#38BDF8" },
  { name:"Petróleo",  hex:"#155E63" },
  { name:"Roxo",      hex:"#5B21B6" },
  { name:"Lavanda",   hex:"#C4B5FD" },
  { name:"Ameixa",    hex:"#5C1A4F" },
  { name:"Preto",     hex:"#18181B" },
  { name:"Cinza",     hex:"#71717A" }
];

let state = {
  gastos:[], parcelas:[], metas:[], chatHistory:[],
  currentFilter:'todos', currentScreen:'home', modalType:'neg',
  dividas:[], cartoes:[], metasGoal:[],
  userName:'', userAvatar:'', themeIndex:0, userGenero:'f', darkMode:false
};

function saveState(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state));}catch(e){}}
function loadState(){try{const d=localStorage.getItem(STORE_KEY);if(d){const p=JSON.parse(d);state={...state,...p};}}catch(e){}}

// ── APLICA TEMA COMPLETAMENTE (cor + modo) ──
function applyTheme(idx, darkMode){
  if(darkMode === undefined) darkMode = !!state.darkMode;
  const acc = ACCENTS[idx] || ACCENTS[0];
  const baseHex = acc.hex;
  const {h, s, l} = hexToHsl(baseHex);
  const isNeutral = s < 6; // Preto/Cinza não devem ganhar matiz artificial

  let p1, p2, p3, gradStart, gradEnd;
  let bgBody, bgApp, glass, glassBorder, gray200, gray400, gray500, gray700, gray900;
  let alphaPale, alphaSoft, alphaBorder, alphaShadow, alphaGlow, alphaBlob1, alphaBlob2;

  if(!darkMode){
    // ── MODO CLARO ──
    p1 = baseHex;
    p2 = hslToHex(h, s, Math.min(l+12, 90));
    p3 = hslToHex(h, s*0.85, Math.min(l+28, 94));
    gradStart = hslToHex(h, s, Math.max(l-14, 5));
    gradEnd = p2;
    bgBody = isNeutral
      ? `linear-gradient(160deg,#E4E4E7 0%,#F4F4F5 40%,#FAFAFA 100%)`
      : `linear-gradient(160deg,${hslToHex(h,Math.min(s,70),82)} 0%,${hslToHex(h,Math.min(s,55),92)} 40%,${hslToHex(h,Math.min(s,40),97)} 100%)`;
    bgApp = isNeutral ? '#FAFAFA' : hslToHex(h, Math.min(s,35), 97);
    glass = 'rgba(255,255,255,0.65)';
    glassBorder = 'rgba(255,255,255,0.85)';
    gray200 = '#EBEBEB'; gray400 = '#AAAAAA'; gray500 = '#6B6B6B'; gray700 = '#3D3D3D'; gray900 = '#111111';
    alphaPale=0.06; alphaSoft=0.12; alphaBorder=0.22; alphaShadow=0.38; alphaGlow=0.18; alphaBlob1=0.22; alphaBlob2=0.15;
  } else {
    // ── MODO ESCURO ── (clareia a cor para destacar sobre fundo escuro,
    // preservando a relação de luminosidade original entre as 16 cores)
    const dL1 = Math.min(85, Math.max(58, l*0.4 + 50));
    const dL2 = Math.min(90, dL1 + 8);
    const dL3 = Math.min(95, dL1 + 18);
    const dS = isNeutral ? 0 : Math.min(92, Math.max(55, s));
    p1 = hslToHex(h, dS, dL1);
    p2 = hslToHex(h, dS, dL2);
    p3 = hslToHex(h, dS, dL3);
    gradStart = baseHex; // cor original (clara) como início do degradê, dando profundidade
    gradEnd = p2;
    bgApp = isNeutral ? '#15151A' : hslToHex(h, Math.min(s,55), Math.max(l*0.12,8));
    bgBody = isNeutral
      ? `linear-gradient(160deg,#050507 0%,#0E0E12 55%,#18181D 100%)`
      : `linear-gradient(160deg,${hslToHex(h,Math.min(s,60),3)} 0%,${bgApp} 55%,${hslToHex(h,Math.min(s,50),Math.min(l*0.2+8,20))} 100%)`;
    glass = 'rgba(255,255,255,0.07)';
    glassBorder = 'rgba(255,255,255,0.14)';
    gray200 = '#23232B'; gray400 = '#71717A'; gray500 = '#9CA3AF'; gray700 = '#D4D4D8'; gray900 = '#FAFAFA';
    alphaPale=0.12; alphaSoft=0.2; alphaBorder=0.32; alphaShadow=0.45; alphaGlow=0.22; alphaBlob1=0.18; alphaBlob2=0.14;
  }

  const grad = `linear-gradient(135deg,${gradStart} 0%,${p1} 50%,${gradEnd} 100%)`;

  const r = document.documentElement.style;
  r.setProperty('--p1', p1);
  r.setProperty('--p2', p2);
  r.setProperty('--p3', p3);
  r.setProperty('--grad', grad);
  r.setProperty('--bg-body', bgBody);
  r.setProperty('--bg-app', bgApp);
  r.setProperty('--p-pale', rgba(p1, alphaPale));
  r.setProperty('--p-soft', rgba(p1, alphaSoft));
  r.setProperty('--p-border', rgba(p1, alphaBorder));
  r.setProperty('--p-shadow', rgba(p1, alphaShadow));
  r.setProperty('--p-glow', rgba(p1, alphaGlow));
  r.setProperty('--blob1', rgba(p2, alphaBlob1));
  r.setProperty('--blob2', rgba(p1, alphaBlob2));
  r.setProperty('--glass', glass);
  r.setProperty('--glass-border', glassBorder);
  r.setProperty('--gray-200', gray200);
  r.setProperty('--gray-400', gray400);
  r.setProperty('--gray-500', gray500);
  r.setProperty('--gray-700', gray700);
  r.setProperty('--gray-900', gray900);

  document.body.style.background = bgBody;
  const app = document.getElementById('app');
  if(app) app.style.background = bgApp;

  state.themeIndex = idx;
  state.darkMode = darkMode;

  const lbl = document.getElementById('perfilTemaLabel');
  if(lbl) lbl.textContent = acc.name + (darkMode ? ' (escuro)' : '');
}

function buildThemeGrid(){
  const g = document.getElementById('themeGrid');
  const renderDot = (acc, i) => {
    const {r,gC,b} = (()=>{ const c = hexToRgb(acc.hex); return {r:c.r, gC:c.g, b:c.b}; })();
    const luma = (0.299*r + 0.587*gC + 0.114*b) / 255;
    const checkColor = luma > 0.62 ? '#1F2937' : '#FFFFFF';
    return `
    <div class="theme-item">
      <div class="theme-dot ${state.themeIndex===i?'selected':''}" style="background:${acc.hex};" onclick="pickTheme(${i})">
        <svg class="ti ti-check" style="color:${checkColor};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
      </div>
      <span class="theme-label">${acc.name}</span>
    </div>`;
  };
  g.innerHTML =
    `<div class="theme-grid-inner">${ACCENTS.map(renderDot).join('')}</div>
     <div class="dark-mode-toggle-row">
       <div class="dark-mode-toggle-label">
         <svg class="ti ti-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.446z" /></svg>
         <span>Modo escuro</span>
       </div>
       <button class="dark-toggle-switch ${state.darkMode?'on':''}" id="darkToggleBtn" onclick="toggleDarkMode()" type="button">
         <span class="dark-toggle-knob"></span>
       </button>
     </div>`;
}

function pickTheme(idx){
  applyTheme(idx, state.darkMode);
  saveState();
  buildThemeGrid();
  showToast('Tema ' + ACCENTS[idx].name + ' aplicado!');
}

function toggleDarkMode(){
  applyTheme(state.themeIndex, !state.darkMode);
  saveState();
  buildThemeGrid();
}


// ── FIX DE ALTURA REAL DA TELA (iOS PWA standalone) ──
// No modo "instalado na tela de início" do iOS, 100vh/100dvh podem ser
// calculados errado no primeiro carregamento (cold start), fazendo a
// barra de navegação inferior aparecer deslocada para o topo com um
// espaço vazio sobrando embaixo. Aqui medimos a altura real da janela
// via JS (mais confiável que vh/dvh) e a aplicamos como variável CSS.
// No cold start do PWA standalone no iOS, a primeira leitura pode vir
// errada antes do Safari "se acomodar" (ajustar status bar / home
// indicator), por isso medimos de novo em vários momentos após o load
// e, SÓ durante essa janela inicial de acomodação, ignoramos quedas de
// altura (que ali seriam o bug de cold start, não o teclado).
//
// Depois dessa janela inicial, passamos a aceitar normalmente qualquer
// mudança de altura — inclusive encolher quando o teclado do iOS abre.
// Isso é o que faz o layout (mensagens, caixa de texto, barra de nav)
// se reorganizar corretamente acima do teclado, em vez do iOS "empurrar
// visualmente" a tela inteira pra cima (bug clássico de position:fixed
// + teclado no Safari) — combinado com o "interactive-widget=resizes-
// content" no <meta viewport>, que avisa o navegador pra de fato encolher
// a área visível em vez de só deslocar a visualização.
let knownAppHeight = 0;
let appBootTime = Date.now();
const APP_SETTLE_MS = 2600;
function setAppHeight(force) {
  const h = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
  const settling = (Date.now() - appBootTime) < APP_SETTLE_MS;
  if (force || !settling || h >= knownAppHeight) {
    knownAppHeight = Math.max(knownAppHeight, h);
    document.documentElement.style.setProperty('--app-height', h + 'px');
  }
}
setAppHeight(true);
window.addEventListener('resize', () => setAppHeight(false));
window.addEventListener('orientationchange', () => { knownAppHeight = 0; appBootTime = Date.now(); setTimeout(() => setAppHeight(true), 100); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) setAppHeight(false); });
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => setAppHeight(false));
}
[0, 50, 150, 300, 600, 1000, 2000, 2500].forEach(delay => setTimeout(() => setAppHeight(false), delay));

// ══════════════════════════════════
// ATALHO RÁPIDO (iOS Shortcuts) — registro de gasto/entrada via URL
// ══════════════════════════════════
// Categorias curtas usadas no menu do Atalho (Selecionar de Lista),
// mapeadas para as categorias reais do Fina.
const QUICKADD_CATS = {
  alimentacao: 'restaurante',
  transporte:  'transporte',
  mercado:     'feira',
  delivery:    'delivery',
  lazer:       'lazer',
  saude:       'saude',
  outros:      'outros'
};

function tryProcessQuickAdd() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('valor')) return false;
  // Só processa se já existir uma sessão pronta (onboarding concluído);
  // caso contrário, segue o fluxo normal de login/onboarding.
  if (!state.loginEmail || !state.termosAceitos || !state.userName) return false;

  const valor = parseFloat(String(params.get('valor')).replace(',', '.'));
  if (!valor || isNaN(valor) || valor <= 0) return false;

  const tipoRaw = (params.get('tipo') || 'gasto').toLowerCase();
  const tipo = (tipoRaw === 'entrada' || tipoRaw === 'pos') ? 'pos' : 'neg';
  const catKey = (params.get('cat') || 'outros').toLowerCase();
  const cat = tipo === 'pos' ? 'entrada' : (QUICKADD_CATS[catKey] || 'outros');
  let desc = params.get('desc');
  desc = desc ? desc.trim() : '';
  if (!desc) desc = tipo === 'pos' ? 'Entrada rápida' : 'Gasto rápido';

  state.gastos.push({
    id: uid(), desc, valor, cat, tipo,
    data: nowFull(), dataISO: new Date().toISOString(), status: 'confirmado'
  });
  saveState();

  // Limpa os parâmetros da URL para não registrar de novo se a página
  // for recarregada ou reaberta depois.
  history.replaceState({}, document.title, window.location.pathname + window.location.hash);

  // Pula o loading e entra direto no app por baixo da tela de confirmação.
  const loading = document.getElementById('loading');
  if (loading) loading.classList.add('gone');
  entrarNoApp();

  const info = catInfo(cat);
  document.getElementById('quickAddValor').textContent = fmt(valor);
  document.getElementById('quickAddDesc').textContent = tipo === 'pos' ? 'Entrada registrada!' : 'Gasto registrado!';
  document.getElementById('quickAddCatPill').innerHTML =
    `${iconSvg(info.icon)}${info.label}`;
  const ov = document.getElementById('quickAddOverlay');
  ov.classList.add('show');
  setTimeout(() => {
    ov.classList.add('hide');
    setTimeout(() => { ov.classList.remove('show','hide'); }, 400);
  }, 2000);
  return true;
}

// ── INIT ──
window.onload = () => {
  setAppHeight(true);
  loadState();
  applyTheme(state.themeIndex ?? 0, !!state.darkMode);
  initCropCanvas();
  // Reforço defensivo: garante que o botão "Gerenciar categorias" de
  // Entradas sempre responda ao toque, mesmo se o onclick inline falhar
  // por algum motivo (cache de PWA antigo, etc.)
  const btnCatEnt = document.getElementById('btnCategoriasEntradas');
  if (btnCatEnt) btnCatEnt.addEventListener('click', () => openModal('categorias'));

  // Atalho rápido (iOS Shortcuts): se a URL já trouxer um valor pra
  // registrar e a sessão estiver pronta, processa na hora e pula a
  // tela de carregamento inteira.
  if (tryProcessQuickAdd()) return;

  const bar = document.getElementById('loadBar');
  setTimeout(() => { if(bar) bar.style.width = '100%'; }, 100);
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if(loading) loading.classList.add('gone');
    // Sessão já existente (login feito anteriormente neste celular): pula a tela de login
    if (state.loginEmail) {
      if (!state.termosAceitos) {
        const t = document.getElementById('termosOverlay');
        t.style.display = 'flex';
        t.style.zIndex  = '600';
        setTimeout(() => t.classList.add('open'), 50);
      } else {
        entrarNoApp();
      }
    } else {
      showLogin();
    }
  }, 2000);
};

function showLogin() {
  const ls = document.getElementById('loginScreen');
  if(ls) { ls.style.display='flex'; ls.style.opacity='1'; ls.style.zIndex='400'; ls.classList.remove('hidden'); }
}

function initApp(){ updateAvatarDisplay(); renderAll(); if(state.chatHistory.length===0) initChat(); else restoreChat(); }

function openOnboard(){
  const pick = document.getElementById('onboardAvatarPick');
  if(state.userAvatar){
    pick.innerHTML = `<img src="${state.userAvatar}"/>`;
  } else {
    pick.innerHTML = '<svg class="ti ti-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /> <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>';
  }
  const nameInput = document.getElementById('onboardName');
  nameInput.value = state.userName || '';
  const isEdit = !!state.userName;
  const g = state.userGenero || 'f';
  document.getElementById('onboardTitle').textContent = isEdit ? 'Editar perfil' : (g === 'm' ? 'Bem-vindo ao Fina!' : 'Bem-vinda ao Fina!');
  document.getElementById('onboardSub').textContent = isEdit
    ? 'Atualize seu nome e foto de perfil.'
    : 'Sua assistente financeira pessoal. Como posso te chamar?';
  // restaura visual dos botões de gênero
  if (state.userGenero) selectGenero(state.userGenero);
  document.getElementById('onboard').classList.add('open');
}

function finishOnboard(){
  const nameEl = document.getElementById('onboardName');
  const name = nameEl ? nameEl.value.trim() : '';
  if(!name){ if(nameEl) nameEl.focus(); return; }
  state.userName = name;
  // salva gênero selecionado (padrão 'f' se não escolheu)
  if (!state.userGenero) state.userGenero = 'f';
  const pick = document.getElementById('onboardAvatarPick');
  if(pick){ const img = pick.querySelector('img'); if(img) state.userAvatar = img.src; }
  // Fecha o teclado e espera o Safari "se acomodar" antes de continuar.
  // Trocar o display do overlay enquanto o teclado ainda está fechando
  // pode deixar o layout do app (header, nav) num estado inconsistente
  // até a próxima recarga completa da página.
  if (nameEl) nameEl.blur();
  setTimeout(() => {
    const ob = document.getElementById('onboard');
    ob.classList.remove('open');
    ob.style.display = 'none';
    saveState();
    setAppHeight(true);
    initApp();
  }, 350);
}

function selectGenero(g) {
  state.userGenero = g;
  // atualiza visual dos botões
  ['f','m','n'].forEach(k => {
    const btn = document.getElementById('gBtn' + k.toUpperCase());
    if (!btn) return;
    if (k === g) {
      btn.style.background = 'var(--grad)';
      btn.style.color = 'white';
      btn.style.borderColor = 'transparent';
    } else {
      btn.style.background = 'var(--p-pale)';
      btn.style.color = 'var(--p1)';
      btn.style.borderColor = 'var(--p-border)';
    }
  });
  // atualiza título do onboarding
  const titleEl = document.getElementById('onboardTitle');
  if (titleEl && !state.userName) {
    titleEl.textContent = g === 'm' ? 'Bem-vindo ao Fina!' : 'Bem-vinda ao Fina!';
  }
}

function previewOnboardAvatar(input){
  const file = input.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    openCropper(e.target.result, (croppedSrc) => {
      const pick = document.getElementById('onboardAvatarPick');
      pick.innerHTML = `<img src="${croppedSrc}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>`;
    });
  };
  reader.readAsDataURL(file);
}

function updateAvatar(input){
  const file = input.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    openCropper(e.target.result, (croppedSrc) => {
      state.userAvatar = croppedSrc;
      saveState();
      updateAvatarDisplay();
      showToast('Foto atualizada!');
    });
  };
  reader.readAsDataURL(file);
}

function updateAvatarDisplay(){
  const n = state.userName || 'você';
  document.getElementById('home-name').textContent = n;
  document.getElementById('perfilNome').textContent = n;
  document.getElementById('perfilNomeItem').textContent = n;
  const homeAv = document.getElementById('homeAvatar');
  const homeIcon = document.getElementById('homeAvatarIcon');
  const perfilAv = document.getElementById('perfilAvatar');
  const perfilIcon = document.getElementById('perfilAvatarIcon');
  if(state.userAvatar){
    homeIcon.style.display = 'none';
    let img = homeAv.querySelector('img'); if(!img){img=document.createElement('img');homeAv.appendChild(img);} img.src = state.userAvatar;
    perfilIcon.style.display = 'none';
    let pimg = perfilAv.querySelector('img:not(.perfil-avatar-edit img)');
    if(!pimg){pimg=document.createElement('img');perfilAv.insertBefore(pimg,perfilAv.firstChild);}
    pimg.src = state.userAvatar; pimg.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';
  } else { homeIcon.style.display=''; perfilIcon.style.display=''; }
}

// ══════════════════════════════════
// CROP DE AVATAR — canvas drag+zoom
// ══════════════════════════════════
const _crop = {
  img: null, scale: 1, minScale: 0.5, maxScale: 5,
  ox: 0, oy: 0,           // offset do centro (px no canvas)
  dragging: false, lastX: 0, lastY: 0,
  pinching: false, lastPinchDist: 0,
  onConfirm: null,
  SIZE: 280, R: 132       // R = raio do círculo (SIZE/2 - 8)
};

function openCropper(src, onConfirm) {
  _crop.onConfirm = onConfirm;
  const im = new Image();
  im.onload = () => {
    _crop.img = im;
    _crop.ox = 0; _crop.oy = 0;
    // scale inicial: preenchimento mínimo do círculo
    const minDim = Math.min(im.width, im.height);
    _crop.scale = (_crop.R * 2) / minDim;
    _crop.minScale = _crop.scale * 0.85;
    _crop.maxScale = _crop.scale * 5;
    const rng = document.getElementById('cropZoomRange');
    if(rng){ rng.min = _crop.minScale; rng.max = _crop.maxScale; rng.value = _crop.scale; }
    _drawCrop();
  };
  im.src = src;
  const ov = document.getElementById('cropOverlay');
  ov.style.display = 'flex';
  setTimeout(() => ov.classList.add('open'), 10);
}

function closeCropper() {
  const ov = document.getElementById('cropOverlay');
  ov.classList.remove('open');
  setTimeout(() => { ov.style.display = 'none'; _crop.img = null; _crop.onConfirm = null; }, 300);
}

function _drawCrop() {
  const canvas = document.getElementById('cropCanvas');
  if (!canvas || !_crop.img) return;
  const ctx = canvas.getContext('2d');
  const S = _crop.SIZE, R = _crop.R;
  ctx.clearRect(0, 0, S, S);

  // desenha a imagem
  const iw = _crop.img.width * _crop.scale;
  const ih = _crop.img.height * _crop.scale;
  ctx.drawImage(_crop.img, S/2 + _crop.ox - iw/2, S/2 + _crop.oy - ih/2, iw, ih);

  // escurece fora do círculo
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.58)';
  ctx.fillRect(0, 0, S, S);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath(); ctx.arc(S/2, S/2, R, 0, Math.PI*2); ctx.fill();
  ctx.restore();

  // borda do círculo
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(S/2, S/2, R, 0, Math.PI*2); ctx.stroke();

  // linhas-guia sutis
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(S/2, S/2-R); ctx.lineTo(S/2, S/2+R);
  ctx.moveTo(S/2-R, S/2); ctx.lineTo(S/2+R, S/2);
  ctx.stroke();
}

function _cropClamp() {
  if (!_crop.img) return;
  const iw = _crop.img.width * _crop.scale;
  const ih = _crop.img.height * _crop.scale;
  const D = _crop.R * 2;
  const mx = Math.max(0, (iw - D) / 2);
  const my = Math.max(0, (ih - D) / 2);
  _crop.ox = Math.max(-mx, Math.min(mx, _crop.ox));
  _crop.oy = Math.max(-my, Math.min(my, _crop.oy));
}

function confirmCrop() {
  if (!_crop.img) return;
  const OUT = 300;
  const ratio = OUT / (_crop.R * 2);
  const out = document.createElement('canvas');
  out.width = OUT; out.height = OUT;
  const ctx = out.getContext('2d');
  ctx.beginPath(); ctx.arc(OUT/2, OUT/2, OUT/2, 0, Math.PI*2); ctx.clip();
  const iw = _crop.img.width * _crop.scale * ratio;
  const ih = _crop.img.height * _crop.scale * ratio;
  ctx.drawImage(_crop.img,
    OUT/2 + _crop.ox * ratio - iw/2,
    OUT/2 + _crop.oy * ratio - ih/2,
    iw, ih);
  const dataUrl = out.toDataURL('image/jpeg', 0.88);
  if (_crop.onConfirm) _crop.onConfirm(dataUrl);
  closeCropper();
}

function onCropZoom(val) {
  _crop.scale = parseFloat(val);
  _cropClamp();
  _drawCrop();
}

function initCropCanvas() {
  const canvas = document.getElementById('cropCanvas');
  if (!canvas) return;

  // ── Mouse ──
  canvas.addEventListener('mousedown', e => {
    _crop.dragging = true; _crop.lastX = e.clientX; _crop.lastY = e.clientY;
  });
  window.addEventListener('mousemove', e => {
    if (!_crop.dragging) return;
    _crop.ox += e.clientX - _crop.lastX; _crop.oy += e.clientY - _crop.lastY;
    _crop.lastX = e.clientX; _crop.lastY = e.clientY;
    _cropClamp(); _drawCrop();
  });
  window.addEventListener('mouseup', () => { _crop.dragging = false; });

  // ── Wheel ──
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    _crop.scale = Math.max(_crop.minScale, Math.min(_crop.maxScale,
      _crop.scale * (1 - e.deltaY * 0.001)));
    _cropClamp();
    const rng = document.getElementById('cropZoomRange');
    if(rng) rng.value = _crop.scale;
    _drawCrop();
  }, { passive: false });

  // ── Touch ──
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    if (e.touches.length === 1) {
      _crop.dragging = true; _crop.pinching = false;
      _crop.lastX = e.touches[0].clientX; _crop.lastY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      _crop.pinching = true; _crop.dragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      _crop.lastPinchDist = Math.sqrt(dx*dx + dy*dy);
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (_crop.dragging && e.touches.length === 1) {
      _crop.ox += e.touches[0].clientX - _crop.lastX;
      _crop.oy += e.touches[0].clientY - _crop.lastY;
      _crop.lastX = e.touches[0].clientX; _crop.lastY = e.touches[0].clientY;
      _cropClamp(); _drawCrop();
    } else if (_crop.pinching && e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      _crop.scale = Math.max(_crop.minScale, Math.min(_crop.maxScale,
        _crop.scale * (dist / _crop.lastPinchDist)));
      _crop.lastPinchDist = dist;
      _cropClamp();
      const rng = document.getElementById('cropZoomRange');
      if(rng) rng.value = _crop.scale;
      _drawCrop();
    }
  }, { passive: false });

  canvas.addEventListener('touchend', e => {
    if (e.touches.length < 2) _crop.pinching = false;
    if (e.touches.length === 0) _crop.dragging = false;
  });
}

function fmt(v){ return 'R$ '+Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function nowFull(){ return new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}); }
function uid(){ return Math.random().toString(36).slice(2); }
// Mês-ano atual no formato "YYYY-MM" — usado para controlar o status
// de pagamento mensal recorrente de parcelas e dívidas (pago neste mês
// volta a ficar pendente automaticamente no mês seguinte).
function currentYYYYMM(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'); }

function switchScreen(name){
  // Fecha o teclado (se algum campo estiver focado) ao trocar de tela
  if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
    document.activeElement.blur();
  }
  // Limpa o estado de transição de TODAS as telas antes de aplicar o
  // novo estado. Isso evita que trocar de aba rapidamente várias vezes
  // deixe classes "exit" acumuladas em telas que não estão mais em
  // transição, o que pode causar a sensação de telas "misturadas".
  document.querySelectorAll('.screen').forEach(s => {
    if (s.id !== 'screen-' + name) {
      s.classList.remove('active');
      s.classList.remove('exit');
    }
  });
  const prev = document.getElementById('screen-'+state.currentScreen);
  if (prev && prev.id !== 'screen-' + name) {
    prev.classList.add('exit');
    setTimeout(()=>{ if (prev.classList.contains('exit')) prev.classList.remove('exit'); }, 300);
  }
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const btn = document.getElementById('nav-'+name); if(btn) btn.classList.add('active');
  state.currentScreen = name;
  if(name==='perfil'){ updateAvatarDisplay(); renderPerfilInfo(); }
  if(name==='gastos')   { setTimeout(()=>{ setPeriodo('mes'); buildMesChips(); },100); }
  if(name==='entradas') { setTimeout(()=>{ setEntradaPeriodo('mes'); buildEntradaMesChips(); },100); }
  if(name==='dashboard'){ setTimeout(()=>{ setDashPeriodo('mes'); buildDashMesChips(); setDashView('mes'); },100); }
  renderAll();
  setTimeout(scrollNavToActive, 50);
}

function renderAll(){ renderHome(); renderGastos(); renderParcelas(); renderMetas(); renderDividas(); renderCartoes(); renderEntradas(); renderDashboard(); }

function calcSaldo(){
  const ent = state.gastos.filter(g=>g.tipo==='pos').reduce((a,g)=>a+g.valor,0);
  const gas = state.gastos.filter(g=>g.tipo==='neg').reduce((a,g)=>a+g.valor,0);
  const par = state.parcelas.reduce((a,p)=>a+(p.total/p.qtd),0);
  return { saldo:ent-gas-par, entradas:ent, gastos:gas, parcelas:par };
}

// Todos os ícones de categoria usam ci-primary (herda a cor do tema) ou variantes fixas para verde/vermelho/amber
function catInfo(cat){
  const m = {
    // Beleza & cuidados pessoais
    maquiagem:   {ci:'ci-primary',icon:'ti-palette',              label:'Maquiagem'},
    skincare:    {ci:'ci-primary',icon:'ti-droplet',               label:'Skincare'},
    beleza:      {ci:'ci-primary',icon:'ti-scissors',              label:'Beleza'},
    cuidados:    {ci:'ci-primary',icon:'ti-heart',                 label:'Cuidados pessoais'},
    cabelo:      {ci:'ci-primary',icon:'ti-scissors',              label:'Cabelo'},
    unhas:       {ci:'ci-primary',icon:'ti-hand-finger',           label:'Unhas'},
    perfume:     {ci:'ci-primary',icon:'ti-spray',                 label:'Perfumaria'},
    // Saúde
    farmacia:    {ci:'ci-blue',   icon:'ti-first-aid-kit',         label:'Farmácia'},
    saude:       {ci:'ci-blue',   icon:'ti-pill',                  label:'Saúde'},
    academia:    {ci:'ci-blue',   icon:'ti-barbell',               label:'Academia'},
    terapia:     {ci:'ci-blue',   icon:'ti-brain',                 label:'Terapia'},
    // Transporte
    transporte:  {ci:'ci-teal',   icon:'ti-car',                   label:'Transporte'},
    combustivel: {ci:'ci-teal',   icon:'ti-gas-station',           label:'Combustível'},
    estacionamento:{ci:'ci-teal', icon:'ti-parking-circle',        label:'Estacionamento'},
    // Alimentação
    delivery:    {ci:'ci-amber',  icon:'ti-bike',                  label:'Delivery'},
    restaurante: {ci:'ci-amber',  icon:'ti-tools-kitchen-2',                 label:'Restaurante'},
    feira:       {ci:'ci-green',  icon:'ti-building-store',        label:'Feira / Mercado'},
    cafe:        {ci:'ci-amber',  icon:'ti-coffee',                label:'Café'},
    bebidas:     {ci:'ci-amber',  icon:'ti-glass-cocktail',        label:'Bebidas'},
    // Compras / e-commerce
    shopee:      {ci:'ci-primary',icon:'ti-package',               label:'Shopee'},
    shein:       {ci:'ci-primary',icon:'ti-shopping-bag',          label:'Shein'},
    amazon:      {ci:'ci-primary',icon:'ti-brand-amazon',          label:'Amazon'},
    mercadolivre:{ci:'ci-primary',icon:'ti-shopping-cart',         label:'Mercado Livre'},
    roupas:      {ci:'ci-primary',icon:'ti-shirt',                 label:'Roupas'},
    calcados:    {ci:'ci-primary',icon:'ti-shoe',                  label:'Calçados'},
    eletronicos: {ci:'ci-blue',   icon:'ti-device-mobile',         label:'Eletrônicos'},
    // Casa & moradia
    aluguel:     {ci:'ci-rose',   icon:'ti-home',                  label:'Aluguel'},
    condominio:  {ci:'ci-rose',   icon:'ti-building',              label:'Condomínio'},
    energia:     {ci:'ci-rose',   icon:'ti-bolt',                  label:'Energia'},
    agua:        {ci:'ci-rose',   icon:'ti-droplet-half-2',        label:'Água'},
    internet:    {ci:'ci-rose',   icon:'ti-wifi',                  label:'Internet'},
    casa:        {ci:'ci-rose',   icon:'ti-home-2',                label:'Casa'},
    moveis:      {ci:'ci-rose',   icon:'ti-sofa',                  label:'Móveis'},
    // Educação & trabalho
    educacao:    {ci:'ci-blue',   icon:'ti-school',                label:'Educação'},
    curso:       {ci:'ci-blue',   icon:'ti-certificate',           label:'Curso'},
    livros:      {ci:'ci-blue',   icon:'ti-book',                  label:'Livros'},
    trabalho:    {ci:'ci-primary',icon:'ti-briefcase',             label:'Trabalho'},
    // Lazer
    lazer:       {ci:'ci-pink',   icon:'ti-ticket',                label:'Lazer'},
    viagem:      {ci:'ci-pink',   icon:'ti-plane',                 label:'Viagem'},
    streaming:   {ci:'ci-pink',   icon:'ti-device-tv',             label:'Streaming'},
    cinema:      {ci:'ci-pink',   icon:'ti-movie',                 label:'Cinema'},
    pet:         {ci:'ci-amber',  icon:'ti-paw',                   label:'Pet'},
    // Financeiro
    impostos:    {ci:'ci-red',    icon:'ti-receipt-tax',           label:'Impostos'},
    assinatura:  {ci:'ci-primary',icon:'ti-repeat',                label:'Assinatura'},
    presente:    {ci:'ci-pink',   icon:'ti-gift',                  label:'Presente'},
    doacao:      {ci:'ci-green',  icon:'ti-hand-heart',            label:'Doação'},
    // Entradas
    entrada:     {ci:'ci-green',  icon:'ti-coin',                  label:'Entrada'},
    salario:     {ci:'ci-green',  icon:'ti-briefcase',             label:'Salário'},
    freela:      {ci:'ci-green',  icon:'ti-laptop',                label:'Freelance'},
    investimento:{ci:'ci-green',  icon:'ti-chart-line',            label:'Investimento'},
    // Genéricos
    outros:      {ci:'ci-primary',icon:'ti-dots-circle-horizontal',label:'Outros'},
  };
  // Categorias personalizadas
  if(cat && cat.startsWith('custom_')) {
    const custom = (state.customCats||[]).find(c => c.key === cat);
    if(custom) return { ci:'ci-primary', icon:null, emoji:custom.emoji, label:custom.nome };
  }
  return m[cat] || m['outros'];
}



function renderHome(){
  const {saldo,entradas,gastos,parcelas} = calcSaldo();
  document.getElementById('home-saldo').textContent = fmt(saldo);
  document.getElementById('home-entradas').textContent = fmt(entradas).replace('R$ ','R$');
  document.getElementById('home-gastos').textContent = fmt(gastos).replace('R$ ','R$');
  document.getElementById('home-parcelas').textContent = fmt(parcelas).replace('R$ ','R$');
  const today = new Date().getDate();
  const alerts = state.parcelas.filter(p=>{const d=p.dia-today;return d>=0&&d<=5;});
  const aEl = document.getElementById('home-alerts-section');
  aEl.innerHTML = alerts.length ? `<div class="section-label"><span style="display:flex;align-items:center;gap:5px;"><svg class="ti ti-bell-ringing" style="font-size:12px;color:var(--amber);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /> <path d="M9 17v1a3 3 0 0 0 6 0v-1" /> <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" /> <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" /></svg> Vencimentos próximos</span></div>`+alerts.map(p=>{const d=p.dia-today;const l=d===0?'Vence hoje!':`Vence em ${d} dia${d>1?'s':''}`;return`<div class="alert-card"><svg class="ti ti-bell-ringing alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /> <path d="M9 17v1a3 3 0 0 0 6 0v-1" /> <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" /> <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" /></svg><div><div class="alert-name">${p.desc}</div><div class="alert-sub">${l}</div></div><div class="alert-val">${fmt(p.total/p.qtd)}</div></div>`;}).join('') : '';
  const mEl = document.getElementById('home-metas');
  mEl.innerHTML = state.metas.length===0
    ? `<div class="empty-state" style="padding:14px 0;"><svg class="ti ti-target" style="font-size:30px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg><p style="margin-top:6px;">Nenhuma meta.<br><a onclick="switchScreen('metas')" style="color:var(--p1);font-weight:700;cursor:pointer;">Criar primeira meta</a></p></div>`
    : state.metas.slice(0,2).map(m=>{const pct=Math.min(100,Math.round((m.atual/m.total)*100));return`<div class="meta-card"><div class="meta-top"><span class="meta-name">${iconSvg(m.tipo==='divida'?'ti-receipt-2':'ti-target')}${m.desc}</span><span class="meta-pct">${pct}%</span></div><div class="bar-bg"><div class="bar-fill ${m.tipo==='divida'?'':'green'}" style="width:${pct}%"></div></div><div class="meta-vals"><span>${fmt(m.atual)}</span><span>${fmt(m.total)}</span></div></div>`;}).join('');
  const recentes = [...state.gastos].reverse().slice(0,5);
  document.getElementById('home-recentes').innerHTML = recentes.length===0
    ? `<div class="empty-state" style="padding:14px 0;"><svg class="ti ti-message-circle-2" style="font-size:30px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" /></svg><p style="margin-top:6px;">Nenhuma movimentação.<br>Fale com a Fina!</p></div>`
    : recentes.map(g=>{const info=catInfo(g.cat||(g.tipo==='pos'?'entrada':'outros'));return`<div class="card"><div class="card-row"><div class="cat-icon ${info.ci}">${iconSvg(info.icon)}</div><div class="card-info"><div class="card-name">${g.desc}</div><div class="card-sub">${g.data}</div></div><div class="card-val ${g.tipo==='pos'?'val-pos':'val-neg'}">${g.tipo==='pos'?'+':'-'} ${fmt(g.valor)}</div></div></div>`;}).join('');
}

function filterGastos(filter){
  state.currentFilter = filter;
  updateCatFilterLabel();
  renderGastos();
}

function updateCatFilterLabel(){
  const labelEl = document.getElementById('catFilterLabel');
  if(!labelEl) return;
  if(state.currentFilter === 'todos'){
    labelEl.textContent = 'Filtrar por categoria: Todos';
  } else {
    const info = catInfo(state.currentFilter);
    labelEl.textContent = 'Filtrar por categoria: ' + info.label;
  }
}

function buildFiltroCategoriaList(){
  const list = document.getElementById('filtroCategoriaList');
  if(!list) return;
  const allCats = [{key:'todos', label:'Todos', icon:'ti-layout-grid'}]
    .concat(CAT_LIST.filter(c => c.key !== 'outros'))
    .concat((state.customCats||[]).map(c => ({key:c.key, label:c.nome, emoji:c.emoji})))
    .concat([{key:'outros', label:'Outros', icon:'ti-dots-circle-horizontal'}]);

  list.innerHTML = allCats.map(c => {
    const isSel = state.currentFilter === c.key;
    const iconHtml = c.emoji
      ? `<div class="cat-filter-icon" style="background:var(--p-pale);">${c.emoji}</div>`
      : `<div class="cat-filter-icon ci-primary">${iconSvg(c.icon)}</div>`;
    return `<div class="cat-filter-option ${isSel?'selected':''}" onclick="selectFiltroCategoria('${c.key}')">
      ${iconHtml}
      <span class="cat-filter-option-label">${c.label}</span>
      <svg class="ti ti-check cat-filter-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
    </div>`;
  }).join('');
}

function selectFiltroCategoria(key){
  filterGastos(key);
  closeModal('modalFiltroCategoria');
}

function renderChart(gastos){
  const sec = document.getElementById('chartSection');
  if(!gastos.length){sec.innerHTML='';return;}

  // agrupa somente gastos (tipo neg)
  const totals={};
  gastos.filter(g=>g.tipo==='neg').forEach(g=>{totals[g.cat]=(totals[g.cat]||0)+g.valor;});
  const sorted=Object.entries(totals).sort((a,b)=>b[1]-a[1]).slice(0,6);
  if(!sorted.length){sec.innerHTML='';return;}

  const total=sorted.reduce((a,[,v])=>a+v,0);

  // pega a cor primária atual do CSS
  const p1=getComputedStyle(document.documentElement).getPropertyValue('--p1').trim()||'#7C3AED';

  // gera paleta de tons da cor primária + neutros para contraste
  function hexToRgb(h){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h.trim());return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:124,g:58,b:237};}
  function mixColor(base,white,t){return`rgb(${Math.round(base.r+(white.r-base.r)*t)},${Math.round(base.g+(white.g-base.g)*t)},${Math.round(base.b+(white.b-base.b)*t)})`;}
  const base=hexToRgb(p1);
  const white={r:255,g:255,b:255};
  const mixes=[0,0.18,0.34,0.48,0.6,0.72];
  const COLORS=mixes.map(t=>mixColor(base,white,t));

  // donut SVG
  const R=54, r=34, cx=64, cy=64;
  const circumference=2*Math.PI*R;
  let offset=0;
  const segments=sorted.map(([cat,val],i)=>{
    const pct=val/total;
    const dash=pct*circumference;
    const gap=circumference-dash;
    const seg=`<circle class="donut-segment" cx="${cx}" cy="${cy}" r="${R}"
      fill="none" stroke="${COLORS[i]}" stroke-width="20"
      stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
      stroke-dashoffset="${(-offset*circumference+circumference/4).toFixed(2)}"
      stroke-linecap="butt"
      onclick="highlightSegment(${i})" />`; 
    offset+=pct;
    return seg;
  });

  // legenda
  const legend=sorted.map(([cat,val],i)=>{
    const info=catInfo(cat);
    const pct=Math.round((val/total)*100);
    return`<div class="donut-legend-item">
      <div class="donut-legend-dot" style="background:${COLORS[i]};"></div>
      <span class="donut-legend-label">${info.label}</span>
      <span class="donut-legend-val">${fmt(val).replace('R$ ','R$')}</span>
      <span class="donut-legend-pct">${pct}%</span>
    </div>`;
  }).join('');

  sec.innerHTML=`<div class="chart-wrap">
    <div class="chart-title"><svg class="ti ti-chart-donut-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v5m4 4h5" /> <path d="M8.929 14.582l-3.429 2.918" /> <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg> Gastos por categoria</div>
    <div class="donut-wrap">
      <div style="position:relative;flex-shrink:0;">
        <svg class="donut-svg" width="128" height="128" viewBox="0 0 128 128">
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--p-pale)" stroke-width="20"/>
          ${segments.join('')}
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--glass)"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;">
          <div class="donut-total-val">${fmt(total).replace('R$ ','R$')}</div>
          <div class="donut-total-label">total</div>
        </div>
      </div>
      <div class="donut-legend">${legend}</div>
    </div>
  </div>`;

  // animação de entrada dos segmentos
  const segs=sec.querySelectorAll('.donut-segment');
  segs.forEach((s,i)=>{
    s.style.opacity='0';
    s.style.transform='scale(0.85)';
    setTimeout(()=>{
      s.style.transition=`opacity 0.5s ${i*0.08}s ease, transform 0.5s ${i*0.08}s cubic-bezier(0.34,1.3,0.64,1)`;
      s.style.opacity='1';
      s.style.transform='scale(1)';
    },30);
  });
}

function highlightSegment(idx){
  const segs=document.querySelectorAll('.donut-segment');
  segs.forEach((s,i)=>{
    s.style.transition='opacity 0.2s, transform 0.2s';
    if(i===idx){s.style.transform='scale(1.04)';s.style.opacity='1';}
    else{s.style.transform='scale(1)';s.style.opacity='0.55';}
  });
  setTimeout(()=>segs.forEach(s=>{s.style.opacity='1';s.style.transform='scale(1)';}),1600);
}

function renderGastos() {
  const all = state.gastos.filter(g => g.tipo === 'neg');
  const periodFiltered = getGastosFiltradosPorPeriodo(all);
  const catFiltered = state.currentFilter === 'todos'
    ? periodFiltered
    : periodFiltered.filter(g => g.cat === state.currentFilter);

  // Update subtitle with period info (mantém o subtítulo descritivo)
  const total = catFiltered.reduce((a,g) => a+g.valor, 0);
  const sub = document.getElementById('gastos-subtitle');
  if(sub) sub.textContent = 'Controle seus gastos';

  // Update total summary card
  const totalEl = document.getElementById('gastosTotalVal');
  if(totalEl) totalEl.textContent = fmt(total);

  // Render chart (only for 'todos' filter, period filtered)
  if(state.currentFilter === 'todos') renderChart(periodFiltered);
  else { const cs = document.getElementById('chartSection'); if(cs) cs.innerHTML = ''; }

  // Update custom category chips
  updateCustomCatChips();

  // Split confirmed vs pending
  const confirmados = catFiltered.filter(g => g.status !== 'pendente');
  const pendentes   = catFiltered.filter(g => g.status === 'pendente');

  const renderGroup = (items, listId) => {
    const list = document.getElementById(listId);
    if(!list) return;
    if(!items.length) {
      list.innerHTML = '<div class="empty-state" style="padding:14px 20px;"><p style="font-size:12px;">Nenhum gasto aqui.</p></div>';
      return;
    }
    const groups = {};
    items.forEach(g => { if(!groups[g.cat]) groups[g.cat]=[]; groups[g.cat].push(g); });
    list.innerHTML = Object.entries(groups).map(([cat, its]) => {
      const info = catInfo(cat);
      const catTotal = its.reduce((a,g)=>a+g.valor,0);
      return `<div class="cat-header"><span class="cat-header-left">${iconSvg(info.icon)}${info.label}</span><span class="cat-total">- ${fmt(catTotal)}</span></div>`+
        [...its].reverse().map(g => {
          const isPend = g.status === 'pendente';
          return `<div class="card"><div class="card-row">
            <div class="cat-icon ci-primary">${iconSvg(info.icon)}</div>
            <div class="card-info"><div class="card-name">${g.desc}</div><div class="card-sub">${g.data}${isPend?' · <span style="color:var(--amber);font-weight:600;">Pendente</span>':''}</div></div>
            <div>
              <div class="card-val val-neg">- ${fmt(g.valor)}</div>
              <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:3px;">
                ${isPend?`<button onclick="confirmarGasto('${g.id}')" style="background:var(--green-light);color:var(--green);border:none;border-radius:99px;padding:2px 8px;font-size:10px;font-weight:700;cursor:pointer;font-family:'Montserrat',sans-serif;">✓</button>`:''}
                <button onclick="deleteGasto('${g.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:15px;padding:0;"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
              </div>
            </div>
          </div></div>`;
        }).join('');
    }).join('');
    // Check limits
    if(listId === 'gastosListConfirmados') checkLimites(confirmados);
  };
  renderGroup(confirmados, 'gastosListConfirmados');
  renderGroup(pendentes,   'gastosListPendentes');
}

function confirmarGasto(id) {
  const g = state.gastos.find(x => x.id === id);
  if(g) { g.status = 'confirmado'; saveState(); renderGastos(); showToast('Gasto confirmado!'); }
}

function checkLimites(gastos) {
  state.limites = state.limites || {};
  Object.entries(state.limites).forEach(([cat, limite]) => {
    if(!limite) return;
    const gasto = gastos.filter(g=>g.cat===cat).reduce((a,g)=>a+g.valor,0);
    if(gasto >= limite * 0.9 && gasto < limite) {
      showToast('Atenção! Você está próximo do limite de ' + catInfo(cat).label);
    } else if(gasto >= limite) {
      showToast('Limite de ' + catInfo(cat).label + ' atingido!');
    }
  });
}

function deleteGasto(id){state.gastos=state.gastos.filter(g=>g.id!==id);saveState();renderAll();showToast('Removido!');}

function pagarParcela(id){
  const p = state.parcelas.find(x=>x.id===id);
  if(!p) return;
  const mesAtual = currentYYYYMM();
  if (p.ultimoPagamento === mesAtual) {
    // Desfaz o pagamento marcado neste mês (correção de toque acidental)
    p.ultimoPagamento = null;
    p.paga = Math.max(1, (p.paga||1) - 1);
    showToast('Pagamento desfeito.');
  } else {
    p.ultimoPagamento = mesAtual;
    p.paga = (p.paga||1) + 1;
    if (p.paga > p.qtd) {
      state.parcelas = state.parcelas.filter(x=>x.id!==id);
      showToast('Parcela quitada!');
    } else {
      showToast(`Parcela ${p.paga-1}/${p.qtd} paga!`);
    }
  }
  saveState();
  renderParcelas();
}
function deleteParcela(id){state.parcelas=state.parcelas.filter(p=>p.id!==id);saveState();renderParcelas();showToast('Removido!');}


// closeModal helper

function hideBottomNav(){ const bn = document.getElementById('bottomNav'); if (bn) bn.style.display = 'none'; }
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  // Restaura a barra de navegação inferior (escondida em openModal/edit*) —
  // à prova de qualquer disputa de z-index entre o modal e a nav.
  const bn = document.getElementById('bottomNav');
  if (bn) bn.style.display = '';
}
function closeModalClick(e,id){if(e.target.classList.contains('modal-overlay'))closeModal(id);}
function selectType(t){state.modalType=t;document.getElementById('typeNeg').className='type-btn'+(t==='neg'?' sel-neg':'');document.getElementById('typePos').className='type-btn'+(t==='pos'?' sel-pos':'');document.getElementById('formCatGroup').style.display=t==='neg'?'block':'none';}
function saveGasto(){
  const desc=document.getElementById('formDesc').value.trim();
  const val=parseFloat(document.getElementById('formVal').value);
  const cat=document.getElementById('formCat').value;
  const isPendente = document.getElementById('formPendente')?.checked || false;
  if(!desc||!val||val<=0){showToast('Preencha descrição e valor!');return;}
  state.gastos.push({id:uid(),desc,valor:val,cat:state.modalType==='pos'?'entrada':cat,tipo:state.modalType,data:nowFull(),dataISO:new Date().toISOString(),status:isPendente?'pendente':'confirmado'});
  document.getElementById('formDesc').value='';document.getElementById('formVal').value='';
  closeModal('modalGasto');saveState();renderAll();
  showToast(state.modalType==='pos'?'Entrada registrada!':'Gasto registrado!');
}
function saveNome(){const n=document.getElementById('editNomeInput').value.trim();if(!n)return;state.userName=n;saveState();updateAvatarDisplay();renderPerfilInfo();closeModal('modalEditNome');showToast('Nome atualizado!');}
function confirmClear(){
  showCustomConfirm(
    'Resetar conta do zero?',
    'Todos os dados financeiros (gastos, parcelas, metas, dívidas, cartões, chat) serão removidos permanentemente.',
    function() {
      state.gastos = [];
      state.parcelas = [];
      state.metas = [];
      state.dividas = [];
      state.cartoes = [];
      state.metasGoal = [];
      state.chatHistory = [];
      state.customCats = [];
      state.limites = {};
      saveState();
      renderAll();
      const chatBody = document.getElementById('chatBody');
      if(chatBody) chatBody.innerHTML = '';
      initChat();
      showToast('Conta resetada com sucesso!');
    },
    'red'
  );
}

// ════════════════════════════
// EXPORTAR / IMPORTAR DADOS (BACKUP)
// ════════════════════════════
function exportarDados(){
  try{
    const backup = {
      app: 'Fina',
      versao: STORE_KEY,
      exportadoEm: new Date().toISOString(),
      dados: state
    };
    const json = JSON.stringify(backup, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    const dataStr = new Date().toLocaleDateString('pt-BR').replace(/\//g,'-');
    a.href = url;
    a.download = `fina-backup-${dataStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Backup exportado com sucesso!');
  }catch(e){
    showToast('Erro ao exportar dados!');
  }
}

function importarDados(input){
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try{
      const backup = JSON.parse(e.target.result);
      if(!backup.dados){ showToast('Arquivo de backup inválido!'); return; }
      if(!confirm('Importar este backup vai substituir todos os seus dados atuais. Deseja continuar?')) return;
      state = { ...state, ...backup.dados };
      saveState();
      renderAll();
      updateAvatarDisplay();
      showToast('Backup importado com sucesso!');
    }catch(err){
      showToast('Não foi possível ler o arquivo de backup!');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

function showToast(msg){const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}

const SYS=`Você é a Fina, assistente financeira para mulheres. Empática, sem julgamentos, fala como amiga. Ao identificar transação inclua ao final:\n<TRANSACAO>\n{"tipo":"neg","valor":50,"desc":"iFood","cat":"delivery"}\n</TRANSACAO>\ntipo: neg=gasto, pos=entrada. cats: maquiagem skincare beleza cuidados farmacia saude transporte delivery shopee shein feira outros entrada\nSe parcelado: <PARCELA>{"desc":"x","total":300,"qtd":3,"dia":15,"cartao":"Nubank"}</PARCELA>\nSem transação: responda como amiga. Português informal.`;

function getSYS() {
  const g = state.userGenero || 'f';
  let tratamento = '';
  if (g === 'f') {
    tratamento = `A pessoa se identifica como feminina. Use SEMPRE tratamento no feminino (ex: "bem-vinda", "organizada", "empolgada", "você está"). Nunca use masculino.`;
  } else if (g === 'm') {
    tratamento = `A pessoa se identifica como masculina. Use SEMPRE tratamento no masculino (ex: "bem-vindo", "organizado", "empolgado", "você está"). Nunca use feminino.`;
  } else {
    tratamento = `Use linguagem neutra e inclusiva. Prefira "você", evite adjetivos marcados por gênero quando possível.`;
  }
  return `Você é a Fina, assistente financeira pessoal. Tom: amigável, próximo e profissional — como uma parceira de confiança que cuida das finanças sem julgamentos. Direto ao ponto, acolhedor e encorajador. ${tratamento}

Ao identificar uma transação financeira, inclua OBRIGATORIAMENTE ao final da resposta:
<TRANSACAO>
{"tipo":"neg","valor":50,"desc":"iFood","cat":"delivery"}
</TRANSACAO>
tipo: neg=gasto, pos=entrada.
cats: maquiagem skincare beleza cuidados cabelo unhas perfume farmacia saude academia terapia transporte combustivel delivery restaurante feira cafe bebidas shopee shein amazon mercadolivre roupas calcados eletronicos aluguel condominio energia agua internet casa moveis educacao curso livros trabalho lazer viagem streaming cinema pet impostos assinatura presente doacao entrada salario freela investimento outros

Se a compra for parcelada: <PARCELA>{"desc":"x","total":300,"qtd":3,"dia":15,"cartao":"Nubank"}</PARCELA>

Sem transação: responda de forma amigável, próxima e profissional. Português brasileiro informal mas elegante.`;
}

function initChat(){
  const g = state.userGenero || 'f';
  const saudacao = g === 'm' ? 'amigo' : g === 'n' ? state.userName || 'você' : 'amiga';
  const bemvindo = g === 'm' ? 'Bem-vindo!' : 'Bem-vinda!';
  addBotBubble(`Oi, ${state.userName||saudacao}! ${bemvindo} Sou a Fina, sua assistente financeira.\n\nMe conta tudo que rolou com seu dinheiro hoje!`);
  state.chatHistory=[{role:'assistant',content:'Oi! Sou a Fina.'}];
  saveState();
}
function restoreChat(){const msgs=state.chatHistory.slice(-20);document.getElementById('chatBody').innerHTML='';msgs.forEach(m=>{if(m.role==='assistant')addBotBubble(m.display||m.content,false,false);else addUserBubble(m.content,false);});document.getElementById('chatBody').scrollTop=99999;}
function addBotBubble(text, animate=true, botaoAjuda=false){
  const bod=document.getElementById('chatBody');
  const wrap=document.createElement('div');
  wrap.className='bubble-wrap bot';
  if(!animate)wrap.style.animation='none';
  const clean=text.replace(/<TRANSACAO>[\s\S]*?<\/TRANSACAO>/g,'').replace(/<PARCELA>[\s\S]*?<\/PARCELA>/g,'').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').trim();
  const btnHtml = botaoAjuda
    ? `<button onclick="switchScreen('ajuda')" style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:8px 14px;background:var(--p1);color:white;border:none;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M12 17v.01"/><path d="M12 6a4 4 0 0 1 3.464 6c-.28 .576 -1.464 1.397 -1.464 2"/><circle cx="12" cy="12" r="9"/></svg>Central de Ajuda</button>`
    : '';
  wrap.innerHTML=`<div class="bubble bot">${clean.replace(/\n/g,'<br>')}${btnHtml}</div><div class="bubble-time">${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>`;
  bod.appendChild(wrap);
  if(animate)bod.scrollTop=bod.scrollHeight;
}
function addUserBubble(text,animate=true){const bod=document.getElementById('chatBody');const wrap=document.createElement('div');wrap.className='bubble-wrap user';if(!animate)wrap.style.animation='none';wrap.innerHTML=`<div class="bubble user">${text}</div><div class="bubble-time">${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>`;bod.appendChild(wrap);if(animate)bod.scrollTop=bod.scrollHeight;}
function addConfirmBubble(data){const bod=document.getElementById('chatBody');const wrap=document.createElement('div');wrap.className='bubble-wrap bot';const isPos=data.tipo==='pos';const info=catInfo(data.cat);wrap.innerHTML=`<div class="bubble bot"><div class="confirm-box ${isPos?'pos':'neg'}"><strong>${isPos?'+ ':'- '}R$ ${Number(data.valor).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>${data.desc}</span></div><span class="confirm-tag">${iconSvg(info.icon)}${info.label}</span></div>`;bod.appendChild(wrap);bod.scrollTop=bod.scrollHeight;}
function showTyping(){const bod=document.getElementById('chatBody');const el=document.createElement('div');el.className='bubble-wrap bot';el.id='typing';el.innerHTML=`<div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;bod.appendChild(el);bod.scrollTop=bod.scrollHeight;}
function hideTyping(){const el=document.getElementById('typing');if(el)el.remove();}
function fillSuggestion(text){document.getElementById('chatInput').value=text;document.getElementById('chatInput').focus();}
function buildCtx(){const{saldo,entradas,gastos}=calcSaldo();return`\n[DADOS: Saldo:R$${saldo.toFixed(2)} Entradas:R$${entradas.toFixed(2)} Gastos:R$${gastos.toFixed(2)} Parcelas:${state.parcelas.length} Metas:${state.metas.length}]`;}

async function sendMessage(){
  const inp = document.getElementById('chatInput');
  const text = inp.value.trim();
  if(!text) return;
  inp.value = ''; inp.style.height = '42px';
  addUserBubble(text);
  state.chatHistory.push({ role:'user', content:text });
  document.getElementById('sendBtn').disabled = true;
  showTyping();

  // Small delay for realism
  await new Promise(r => setTimeout(r, 800 + Math.random()*600));
  hideTyping();

  const reply = processaFina(text);
  addBotBubble(reply.texto, true, reply.botaoAjuda);
  state.chatHistory.push({ role:'assistant', content:reply.texto, display:reply.texto });

  if(reply.transacao) {
    state.gastos.push({
      id: uid(),
      desc: reply.transacao.desc,
      valor: reply.transacao.valor,
      cat: reply.transacao.cat,
      tipo: reply.transacao.tipo,
      data: nowFull(),
      dataISO: new Date().toISOString(),
      status: 'confirmado'
    });
    addConfirmBubble(reply.transacao);
    showToast(reply.transacao.tipo==='pos' ? 'Entrada registrada!' : 'Gasto registrado!');
    renderAll();
  }
  if(reply.parcela) {
    state.parcelas.push({
      id: uid(),
      desc: reply.parcela.desc,
      total: reply.parcela.total,
      qtd: reply.parcela.qtd,
      valorParcela: reply.parcela.total / reply.parcela.qtd,
      dia: reply.parcela.dia || 15,
      cartao: reply.parcela.cartao || 'Outro',
      paga: 1,
      criadaEm: new Date().toISOString()
    });
    showToast('Parcela cadastrada!');
    renderAll();
  }
  saveState();
  document.getElementById('sendBtn').disabled = false;
  document.getElementById('chatBody').scrollTop = 99999;
}

// ── FINA LOCAL INTELLIGENCE ──
function processaFina(texto) {
  const t = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  let transacao = null, parcela = null, categoriaIndefinida = false;

  // Extract value
  const valorMatch = texto.match(/r?\$?\s*(\d+(?:[.,]\d{1,2})?)/i);
  const valor = valorMatch ? parseFloat(valorMatch[1].replace(',','.')) : 0;

  // Detect type
  const isEntrada = /recebi|ganhei|entrou|salario|freela|pix receb|comissao|bonus|renda|deposito|caiu na conta|paga(mento|ram)/.test(t);
  const isGasto    = /gastei|paguei|comprei|fui|fiz|compra|gasto|saiu|debito|investi/.test(t);
  const isParc     = /parcelad|parcela|vezes|x de/.test(t);
  const qtdMatch   = texto.match(/(\d+)\s*[xX]\s*(?:de)?/);
  const qtd        = qtdMatch ? parseInt(qtdMatch[1]) : 0;

  // ── Detecção ampla de categoria por palavras-chave ──
  const catRules = [
    // Beleza
    [/maquiagem|batom|blush|sombra|rimmel|base facial|po facial|gloss|delineador/, 'maquiagem'],
    [/skincare|skin care|serum|vitamina c|hidratante facial|creme rosto|toner|protetor solar|esfoliante/, 'skincare'],
    [/salao de beleza|estetica|sobrancelha|design de sobrancelha|depilacao|spa/, 'beleza'],
    [/cabel|tintura|escova|progressiva|coloracao|cortar o cabelo/, 'cabelo'],
    [/unha|manicure|pedicure|nail/, 'unhas'],
    [/perfume|fragrancia|colonia/, 'perfume'],
    [/sabonete|hidratante|higiene|desodorante|creme corporal|absorvente/, 'cuidados'],
    // Saúde
    [/farmacia|drogasil|ultrafarma|panvel|droga raia|pacheco/, 'farmacia'],
    [/remedio|medicamento|consulta|exame|medico|dentista|hospital|clinica|plano de saude|psicolog/, 'saude'],
    [/academia|personal trainer|crossfit|pilates|gym/, 'academia'],
    [/terapia|psicoterapia|terapeuta/, 'terapia'],
    // Transporte
    [/uber|99\b|taxi|onibus|metro|passagem|transporte publico/, 'transporte'],
    [/gasolina|combustivel|posto|alcool no carro|diesel/, 'combustivel'],
    [/estacionamento|zona azul/, 'estacionamento'],
    // Alimentação
    [/ifood|rappi|delivery|entrega de comida/, 'delivery'],
    [/restaurante|almoco fora|jantar fora|lanchonete|hamburgueria|pizzaria/, 'restaurante'],
    [/mercado|feira|supermercado|hortifruti|verdura|legume|compra do mes|atacad[aã]o/, 'feira'],
    [/cafe\b|cafeteria|starbucks/, 'cafe'],
    [/cerveja|bebida|vinho|drinks|bar\b/, 'bebidas'],
    // E-commerce
    [/shopee/, 'shopee'],
    [/shein/, 'shein'],
    [/amazon/, 'amazon'],
    [/mercado livre|mercadolivre/, 'mercadolivre'],
    [/roupa|blusa|calca|vestido|camiseta|jaqueta|moda/, 'roupas'],
    [/tenis|sapato|sandalia|chinelo|bota\b/, 'calcados'],
    [/celular|notebook|fone de ouvido|carregador|eletronico|tv\b|tablet/, 'eletronicos'],
    // Casa
    [/aluguel/, 'aluguel'],
    [/condominio/, 'condominio'],
    [/energia|luz\b|conta de luz/, 'energia'],
    [/\bagua\b|conta de agua/, 'agua'],
    [/internet|wifi|banda larga/, 'internet'],
    [/decoracao|utensilio|cozinha\b/, 'casa'],
    [/movel|moveis|sofa|cama\b|guarda roupa/, 'moveis'],
    // Educação
    [/curso|faculdade|mensalidade escolar|matricula/, 'curso'],
    [/livro\b|livraria/, 'livros'],
    [/escola|educacao/, 'educacao'],
    // Lazer
    [/viagem|hotel|passagem aerea|airbnb|pousada/, 'viagem'],
    [/netflix|spotify|amazon prime|disney|streaming|assinatura de/, 'streaming'],
    [/cinema|filme no cinema/, 'cinema'],
    [/show|parque|ingresso|festa|balada/, 'lazer'],
    [/pet\b|racao|veterinario|petshop/, 'pet'],
    // Financeiro
    [/imposto|ipva|iptu|taxa\b/, 'impostos'],
    [/presente|regalo/, 'presente'],
    [/doacao|doar|caridade/, 'doacao'],
    [/salario/, 'salario'],
    [/freela|freelance/, 'freela'],
    [/investimento|aplicacao|tesouro|cdb|acoes/, 'investimento'],
  ];

  // Sistema de pontuação: conta quantos padrões casam por categoria
  // e escolhe a categoria com maior número de matches (mais específica)
  const scores = {};
  for (const [regex, key] of catRules) {
    if (regex.test(t)) {
      scores[key] = (scores[key] || 0) + 1;
    }
  }
  let cat = null;
  let maxScore = 0;
  for (const [key, score] of Object.entries(scores)) {
    if (score > maxScore) { maxScore = score; cat = key; }
  }
  if (!cat) {
    // Categorias personalizadas por correspondência de nome
    const customMatch = (state.customCats||[]).find(c => t.includes(c.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
    if (customMatch) cat = customMatch.key;
  }
  if (!cat) {
    cat = 'outros';
    categoriaIndefinida = (isGasto || valor > 0) && !isEntrada;
  }

  // Build response
  let resp = '';
  let botaoAjuda = false; // se true, a resposta inclui botão para Central de Ajuda
  const {saldo, entradas, gastos} = calcSaldo();
  const g = state.userGenero || 'f';
  const nomeGenerico = g === 'm' ? 'amigo' : g === 'n' ? '' : 'amiga';
  const nome = state.userName || nomeGenerico;

  // ── RESUMO FINANCEIRO ──
  if (/quanto gastei|resumo|relatorio|como estou|situacao financeira|saldo/.test(t)) {
    const diff = entradas - gastos;
    const status = diff >= 0 ? 'positivo' : 'negativo';
    const dica = diff >= 0
      ? 'Ótimo! Continue assim e aproveite para guardar uma parte.'
      : 'Atenção: seus gastos estão maiores que as entradas. Que tal revisar os gastos na aba Gastos?';
    resp = `Aqui está seu resumo, ${nome}!\n\n💰 Saldo atual: ${fmt(saldo)}\n📈 Entradas: ${fmt(entradas)}\n📉 Gastos: ${fmt(gastos)}\nParcelas ativas: ${state.parcelas.length}\nMetas: ${state.metas.length}\n\n${dica}`;
  }

  // ── COMO FUNCIONA / AJUDA GERAL ──
  else if (/como funciona|como usar|tutorial|o que voce faz|o que e isso|para que serve|como comecar|como registro|como adiciono|como coloco/.test(t)) {
    resp = `Oi ${nome}! Sou a Fina, sua assistente financeira pessoal. Veja o que você pode me falar:\n\n• "Gastei R$50 no iFood" → registro automático\n• "Recebi R$800 de freela" → entrada registrada\n• "Comprei R$300 na Shein em 3x" → parcela criada\n• "Quanto gastei esse mês?" → resumo financeiro\n\nAlém disso, o app tem abas para Gastos, Entradas, Metas, Dívidas, Parcelas e Cartões. Para um guia completo, acesse a Central de Ajuda!`;
    botaoAjuda = true;
  }

  // ── PROBLEMA / ERRO / NÃO FUNCIONA ──
  else if (/nao funciona|problema|bug|erro|travou|nao abre|nao carrega|nao aparece|sumiu|nao ta|nao está|nao consigo|deu erro/.test(t)) {
    resp = `Eita, ${nome}! Lamento que esteja com problemas. Aqui vão algumas dicas rápidas:\n\n1. Tente fechar e abrir o app novamente\n2. Verifique se tem espaço no armazenamento do celular\n3. Certifique-se de que o app está atualizado\n\nSe o problema persistir, a Central de Ajuda tem guias detalhados para cada funcionalidade!`;
    botaoAjuda = true;
  }

  // ── DÚVIDAS SOBRE FUNCIONALIDADES ESPECÍFICAS ──
  else if (/como.*meta|criar.*meta|adicionar.*meta|o que.*meta/.test(t)) {
    resp = `Para criar uma meta, ${nome}:\n\n1. Acesse a aba **Metas** (ícone de alvo)\n2. Toque no botão + no canto inferior direito\n3. Preencha o nome, valor desejado e prazo\n4. Toque em "Criar meta"\n\nVocê pode acompanhar o progresso de cada meta em tempo real!`;
  }
  else if (/como.*parcela|adicionar.*parcela|registrar.*parcela|parcelamento/.test(t)) {
    resp = `Para registrar uma compra parcelada, ${nome}, me fale assim:\n\n👉 "Comprei R$300 na Shopee em 6x"\n\nOu acesse a aba **Parcelas** e toque no + para adicionar manualmente com todos os detalhes.`;
  }
  else if (/como.*cartao|adicionar.*cartao|registrar.*cartao|cadastrar.*cartao/.test(t)) {
    resp = `Para adicionar um cartão, ${nome}:\n\n1. Acesse a aba **Cartões**\n2. Toque no botão +\n3. Informe o nome, banco, dia de fechamento e limite\n\nDepois você pode vincular gastos parcelados ao cartão!`;
  }
  else if (/como.*divida|registrar.*divida|adicionar.*divida/.test(t)) {
    resp = `Para registrar uma dívida, ${nome}:\n\n1. Acesse a aba **Dívidas**\n2. Toque no botão +\n3. Informe o nome, valor total e data de vencimento\n\nO app vai te ajudar a acompanhar o que falta pagar!`;
  }
  else if (/visao geral|dashboard|relatorio|grafico/.test(t)) {
    resp = `A aba **Visão Geral** (ícone de grade) mostra um panorama completo das suas finanças, ${nome}! Lá você encontra:\n\n• Saldo do mês\n• Gráfico de gastos por categoria\n• Metas ativas\n• Comparativo de períodos\n\nÉ a melhor forma de entender seu padrão financeiro!`;
  }
  else if (/senha|login|entrar|acessar|esqueci|alterar senha/.test(t)) {
    resp = `Para alterar sua senha, ${nome}:\n\n1. Na tela de login, toque em "Alterar senha de acesso padrão"\n2. Digite a senha atual (padrão: Fina2026*)\n3. Digite e confirme a nova senha\n\nGuarde bem sua nova senha!`;
  }
  else if (/tema|cor|aparencia|visual/.test(t)) {
    resp = `Para mudar a cor do app, ${nome}:\n\n1. Acesse a aba **Perfil**\n2. Toque em "Cor do tema"\n3. Escolha entre 12 opções (Rosa, Roxo, Azul, Verde e mais)\n4. Toque em "Confirmar"\n\nO app inteiro muda de cor na hora!`;
  }
  else if (/foto|avatar|imagem|perfil/.test(t)) {
    resp = `Para adicionar sua foto, ${nome}:\n\n1. Acesse a aba **Perfil**\n2. Toque no círculo com seu avatar\n3. Escolha uma foto da galeria\n\nSua foto vai aparecer também na tela inicial!`;
  }
  else if (/exportar|backup|salvar dados|importar/.test(t)) {
    resp = `Para fazer backup dos seus dados, ${nome}:\n\n1. Acesse a aba **Perfil**\n2. Role até a seção de configurações\n3. Toque em "Exportar dados"\n\nVocê pode importar de volta quando precisar. Recomendo fazer backup regularmente!`;
  }
  else if (/categoria|personalizar|criar categoria/.test(t)) {
    resp = `Para criar categorias personalizadas, ${nome}:\n\n1. Acesse a aba **Gastos**\n2. Toque em "Gerenciar categorias"\n3. Toque no + para criar uma nova\n\nVocê pode personalizar com nome e emoji!`;
  }

  // ── DICAS FINANCEIRAS ──
  else if (/dica|conselho|ajuda.*financ|como economizar|como poupar|como investir|como controlar/.test(t)) {
    const dicas = [
      `Ótima pergunta, ${nome}! Uma dica clássica é a regra 50-30-20:\n\n• 50% para necessidades (moradia, comida, saúde)\n• 30% para desejos (lazer, restaurantes, compras)\n• 20% para poupança e investimentos\n\nUse o app para categorizar seus gastos e ver onde você está em cada grupo!`,
      `Para economizar mais, ${nome}, comece registrando TUDO que gasta por 30 dias. Muita gente se surpreende com pequenos gastos diários que somam bastante no mês (cafezinho, delivery, assinaturas esquecidas). Depois olha na Visão Geral e identifica onde cortar!`,
      `Dica de ouro, ${nome}: antes de comprar algo não essencial, espere 48 horas. Se ainda quiser depois desse tempo, provavelmente vale. Evita muitas compras por impulso!`
    ];
    resp = dicas[Math.floor(Math.random()*dicas.length)];
    botaoAjuda = true;
  }

  // ── PREOCUPAÇÃO FINANCEIRA / ESTRESSE ──
  else if (/apertad[ao]|sem dinheiro|endividad[ao]|nao tenho|nao sei mais|preocupad[ao]|dificil|nao aguento|sobrou nada|zerado|desempregad[ao]|nao da mais|muito gasto|to mal|ta mal/.test(t)) {
    resp = `Entendo que pode ser difícil, ${nome}. O primeiro passo é justamente o que você está fazendo: usar o app para enxergar a situação com clareza.\n\nAlgumas sugestões:\n• Liste todas as dívidas na aba Dívidas\n• Veja os gastos fixos vs variáveis na Visão Geral\n• Crie uma meta de reserva, mesmo que pequena\n\nDe pouquinho em pouquinho dá para recuperar o controle. Estou aqui para ajudar!`;
    botaoAjuda = true;
  }

  // ── META ──
  else if (/meta|objetivo|juntar|guardar|economizar/.test(t)) {
    resp = `Que ótimo pensar nas suas metas, ${nome}! Vá na aba **Metas** e crie sua meta com nome, valor e prazo. Posso te ajudar a acompanhar o progresso!`;
  }

  // ── DÍVIDA ──
  else if (/divida|deve|devo|emprestimo|devendo/.test(t)) {
    resp = `Entendi. Registre essa dívida na aba **Dívidas** para manter tudo sob controle. Você vai conseguir quitar!`;
  }

  // ── ENTRADA ──
  else if (isEntrada && valor > 0) {
    const emojis = ['🎉', '💚', '✨', '🙌'];
    const emoji = emojis[Math.floor(Math.random()*emojis.length)];
    const msgs = [
      `${emoji} Registrei sua entrada de ${fmt(valor)}. Continue assim, ${nome}!`,
      `${emoji} Arrasou! Entrada de ${fmt(valor)} anotada. Saldo atual: ${fmt(saldo + valor)}`,
      `${emoji} Dinheiro entrando! Registrei ${fmt(valor)} para você.`
    ];
    resp = msgs[Math.floor(Math.random()*msgs.length)];
    transacao = { tipo:'pos', valor, desc: extraiDesc(texto, 'entrada'), cat:'entrada' };
  }

  // ── PARCELA ──
  else if ((isGasto || isParc) && valor > 0 && qtd >= 2) {
    resp = `Entendido! Registrei a compra parcelada em ${qtd}x de ${fmt(valor/qtd)}. Vai aparecer na aba Parcelas!`;
    parcela = { desc: extraiDesc(texto, 'compra'), total: valor, qtd, dia:15, cartao:'Outro' };
  }

  // ── GASTO COM CATEGORIA IDENTIFICADA ──
  else if ((isGasto || valor > 0) && valor > 0 && !categoriaIndefinida) {
    const msgs = [
      `Registrado! ${fmt(valor)} a menos no bolso, ${nome}. Saldo atual: ${fmt(saldo - valor)}`,
      `Anotei! Gasto de ${fmt(valor)} em ${catInfo(cat).label}.`,
      `Beleza! Registrei o gasto de ${fmt(valor)} na categoria ${catInfo(cat).label}.`
    ];
    resp = msgs[Math.floor(Math.random()*msgs.length)];
    transacao = { tipo:'neg', valor, desc: extraiDesc(texto, 'gasto'), cat };
  }

  // ── GASTO SEM CATEGORIA ──
  else if (categoriaIndefinida && valor > 0) {
    resp = `Identifiquei um gasto de ${fmt(valor)}, mas não reconheci a categoria. Vou registrar em **Outros**. Se quiser personalizar, acesse a aba Gastos → Gerenciar categorias!`;
    transacao = { tipo:'neg', valor, desc: extraiDesc(texto, 'gasto'), cat: 'outros' };
  }

  // ── OLÁ / SAUDAÇÃO ──
  else if (/^(oi|ola|hello|hi|bom dia|boa tarde|boa noite|hey|e ai|eai|tudo bem|tudo bom)/.test(t)) {
    const saudacoes = [
      `Oi ${nome}! Tudo bem? Me conta o que rolou com seu dinheiro hoje!`,
      `Olá, ${nome}! Pronta para organizar as finanças?`,
      `Oi oi! Estou aqui, ${nome}. Tem algum gasto ou entrada para registrar?`
    ];
    resp = saudacoes[Math.floor(Math.random()*saudacoes.length)];
  }

  // ── AGRADECIMENTO ──
  else if (/obrigad|valeu|thanks|brigad/.test(t)) {
    resp = `De nada, ${nome}! É para isso que estou aqui. Qualquer coisa, pode me chamar! 💕`;
  }

  // ── DEFAULT INTELIGENTE ──
  else {
    const defaults = [
      `Hmm, não entendi muito bem, ${nome}. Posso te ajudar com:\n\n• Registrar gastos e entradas\n• Ver resumo financeiro\n• Dicas para economizar\n\nOu tente: "Gastei R$50 no mercado" ou "Como funciona o app?"`,
      `Não consegui identificar o que você quer dizer, ${nome}. Se for um gasto, me fala o valor! Ex: "Gastei R$80 na farmácia". Se tiver dúvida, a Central de Ajuda pode te orientar.`,
    ];
    resp = defaults[Math.floor(Math.random()*defaults.length)];
    botaoAjuda = true;
  }

  return { texto: resp, transacao, parcela, botaoAjuda };
}


function extraiDesc(texto, fallback) {
  // Try to extract a meaningful description
  const cleaned = texto.replace(/r?\$?\s*\d+(?:[.,]\d{1,2})?/g,'').replace(/gastei|paguei|comprei|recebi|ganhei|em|no|na|de|do|da/gi,'').trim();
  return cleaned.length > 3 ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : fallback.charAt(0).toUpperCase() + fallback.slice(1);
}

document.getElementById('chatInput').addEventListener('input',function(){this.style.height='42px';this.style.height=Math.min(this.scrollHeight,100)+'px';});
document.getElementById('chatInput').addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
// ── Service Worker (PWA offline) ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ── Prevent double-tap zoom on iOS ──
let lastTap = 0;
document.addEventListener('touchend', e => {
  const now = Date.now();
  if (now - lastTap < 300) e.preventDefault();
  lastTap = now;
}, { passive: false });

// ── Prevent pinch zoom ──
document.addEventListener('touchmove', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// ── Fix iOS keyboard pushing layout up ──
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(inp => {
    inp.addEventListener('focus', () => {
      setTimeout(() => {
        inp.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 350);
    });
  });
}

// ── Android: prevent context menu on long press ──
document.addEventListener('contextmenu', e => e.preventDefault());

// ══════════════════════════════════
// LOGIN
// ══════════════════════════════════
const DEFAULT_EMAIL = "usuario@fina.app";
const DEFAULT_SENHA = "Fina2026*";
const ALLOWED_DOMAINS = ['gmail.com','outlook.com','yahoo.com','hotmail.com','icloud.com'];

function toggleSenhaVis(inputId, iconId) {
  // Compatível com chamada antiga sem parâmetros (login screen)
  const inpId  = inputId || 'loginSenha';
  const icoId  = iconId  || 'senhaVisIcon';
  const inp  = document.getElementById(inpId);
  const icon = document.getElementById(icoId);
  if (!inp || !icon) return;
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  // Ícones são <svg> inline com paths reais — para troca visual real
  // (olho aberto / olho fechado) é preciso atualizar o conteúdo do SVG,
  // não só a classe CSS (que não tem mais efeito de máscara/fonte).
  const newIconName = isHidden ? 'eye-off' : 'eye';
  icon.setAttribute('class', `ti ti-${newIconName}`);
  icon.innerHTML = (ICON_PATHS[newIconName] || ICON_PATHS['eye']);
}

function doLogin() {
  const emailEl = document.getElementById('loginEmail');
  const senhaEl = document.getElementById('loginSenha');
  if(!emailEl || !senhaEl) { alert('Erro: campos não encontrados'); return; }
  const email = emailEl.value.trim();
  const senha = senhaEl.value;
  if(!email) { showToast('Digite seu e-mail!'); return; }
  if(!senha) { showToast('Digite sua senha!'); return; }
  const senhaCorreta = state.loginSenha || 'Fina2026*';
  if(senha !== senhaCorreta) { showToast('Senha incorreta! A senha padrão é: Fina2026*'); return; }
  state.loginEmail = email;
  saveState();
  // Fecha o teclado e espera o Safari "se acomodar" antes de trocar a
  // tela — evita o mesmo bug de layout inconsistente do finishOnboard.
  emailEl.blur();
  senhaEl.blur();
  setTimeout(() => {
    const ls = document.getElementById('loginScreen');
    ls.style.display = 'none';
    setAppHeight(true);
    if(!state.termosAceitos) {
      const t = document.getElementById('termosOverlay');
      t.style.display = 'flex';
      t.style.zIndex  = '600';
      setTimeout(() => t.classList.add('open'), 50);
    } else {
      entrarNoApp();
    }
  }, 350);
}

function entrarNoApp() {
  if(!state.userName) {
    const ob = document.getElementById('onboard');
    ob.style.display = 'flex';
    ob.style.zIndex  = '600';
    setTimeout(() => ob.classList.add('open'), 50);
  } else {
    initApp();
  }
}

// ══════════════════════════════════
// TERMOS
// ══════════════════════════════════
let termosChecked = false;
function toggleTermos() {
  termosChecked = !termosChecked;
  const row = document.getElementById('termosCheckRow');
  const btn = document.getElementById('termosBtn');
  row.classList.toggle('checked', termosChecked);
  btn.style.opacity = termosChecked ? '1' : '0.4';
  btn.style.cursor = termosChecked ? 'pointer' : 'not-allowed';
}
function aceitarTermos() {
  if(!termosChecked) { showToast('Marque o checkbox para continuar!'); return; }
  state.termosAceitos = true;
  saveState();
  const t = document.getElementById('termosOverlay');
  t.classList.remove('open');
  t.style.display = 'none';
  setTimeout(() => entrarNoApp(), 200);
}

// ══════════════════════════════════
// ALTERAR SENHA
// ══════════════════════════════════
function openSenhaModal() {
  document.getElementById('senhaOverlay').classList.add('open');
}
function closeSenhaModal(e) {
  if (e.target === document.getElementById('senhaOverlay'))
    document.getElementById('senhaOverlay').classList.remove('open');
}
function salvarSenha() {
  const atual = document.getElementById('senhaAtual').value;
  const nova  = document.getElementById('senhaNova').value;
  const conf  = document.getElementById('senhaConfirm').value;
  const storedSenha = state.loginSenha || DEFAULT_SENHA;
  if (atual !== storedSenha) { showToast('Senha atual incorreta!'); return; }
  if (!nova || nova.length < 6) { showToast('Nova senha deve ter ao menos 6 caracteres!'); return; }
  if (nova !== conf) { showToast('As senhas não coincidem!'); return; }
  state.loginSenha = nova;
  saveState();
  document.getElementById('senhaOverlay').classList.remove('open');
  ['senhaAtual','senhaNova','senhaConfirm'].forEach(id => document.getElementById(id).value = '');
  showToast('Senha alterada com sucesso!');
}

// ══════════════════════════════════
// PERFIL — TELEFONE
// ══════════════════════════════════
function setEl(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function renderPerfilInfo() {
  const n = state.userName || '...';
  const e = state.loginEmail || DEFAULT_EMAIL;
  setEl('perfilNome', n);
  setEl('perfilNomeItem', n);
  setEl('perfilEmailDisplay', e);
  // Plano info
  const inicio = state.planoInicio ? new Date(state.planoInicio) : new Date();
  if (!state.planoInicio) { state.planoInicio = new Date().toISOString(); saveState(); }
  const venc = new Date(inicio);
  venc.setMonth(venc.getMonth() + 1);
  const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const diffDays = Math.ceil((venc - new Date()) / 86400000);
  setEl('planoVenc', `${venc.getDate()}/${venc.getMonth()+1}/${venc.getFullYear()}`);
  setEl('planoPeriodo', diffDays > 0 ? `${diffDays} dias restantes` : 'Renovar');
  setEl('planoInicio', `${months[inicio.getMonth()]} de ${inicio.getFullYear()}`);
}

// ══════════════════════════════════
// CUSTOM CONFIRM DIALOG (substitui window.confirm, bloqueado em iframes)
// ══════════════════════════════════
let _confirmCallback = null;
function showCustomConfirm(title, msg, onConfirm, type) {
  type = type || 'red';
  document.getElementById('confirmDialogTitle').textContent = title;
  document.getElementById('confirmDialogMsg').textContent = msg;
  const icon = document.getElementById('confirmDialogIcon');
  const btn = document.getElementById('confirmDialogBtn');
  icon.className = 'confirm-dialog-icon ' + type;
  btn.className = 'confirm-btn-ok ' + type;
  if (type === 'amber') {
    icon.innerHTML = '<svg class="ti ti-messages-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M11 11a1 1 0 0 1-1-1m0-3.968v-2.032a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3"/><path d="M14 15v2a1 1 0 0 1-1 1h-7l-3 3v-10a1 1 0 0 1 1-1h2"/></svg>';
  } else {
    icon.innerHTML = '<svg class="ti ti-alert-triangle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.871l-8.106-13.534a1.914 1.914 0 0 0-3.274 0z"/><path d="M12 16h.01"/></svg>';
  }
  _confirmCallback = onConfirm;
  const overlay = document.getElementById('customConfirmOverlay');
  overlay.style.display = 'flex';
  setTimeout(() => overlay.classList.add('open'), 10);
}
function closeCustomConfirm() {
  const overlay = document.getElementById('customConfirmOverlay');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; _confirmCallback = null; }, 280);
}
function executeCustomConfirm() {
  if (_confirmCallback) _confirmCallback();
  closeCustomConfirm();
}

// ══════════════════════════════════
// SAIR / LIMPAR CHAT
// ══════════════════════════════════
function confirmarSair() {
  showCustomConfirm(
    'Sair da conta?',
    'Você será redirecionada para a tela de login.',
    function() {
      const emailEl = document.getElementById('loginEmail');
      const senhaEl = document.getElementById('loginSenha');
      if(emailEl) emailEl.value = '';
      if(senhaEl) senhaEl.value = '';
      switchScreen('home');
      showLogin();
    },
    'red'
  );
}
function confirmLimparChat() {
  showCustomConfirm(
    'Limpar histórico do chat?',
    'Esta ação é irreversível. Todas as conversas com a Fina serão apagadas.',
    function() {
      state.chatHistory = [];
      saveState();
      document.getElementById('chatBody').innerHTML = '';
      initChat();
      showToast('Histórico limpo!');
    },
    'amber'
  );
}

function saveTelefone(){
  const t=document.getElementById('editTelefoneInput').value.trim();
  state.userTelefone=t;
  saveState();
  document.getElementById('modalEditTelefone').classList.remove('open');
  renderPerfilInfo();
  showToast('Telefone atualizado!');
}

// ════════════════════════════
// METAS (nova versão)
// ════════════════════════════
let selectedMetaIcon = '✈️';
let selectedMetaPrazo = '';
let editingMetaId = null;

function selectMetaIcon(icon, btnEl) {
  selectedMetaIcon = icon;
  document.querySelectorAll('.meta-icon-btn').forEach(b => b.classList.remove('active'));
  if (btnEl && btnEl !== 'this') btnEl.classList.add('active');
}
function selectMetaPrazo(prazo) {
  selectedMetaPrazo = prazo;
  ['curto','medio','longo'].forEach(p => {
    const btn = document.getElementById('metaPrazo_'+p);
    btn.className = 'type-btn' + (p === prazo ? ' sel-pos' : '');
  });
}

function resetMetaForm() {
  ['metaNome','metaAtual','metaTotal','metaEmojiCustom'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  selectedMetaIcon = '✈️'; selectedMetaPrazo = '';
  document.querySelectorAll('.meta-icon-btn').forEach(b => b.classList.remove('active'));
  const firstIcon = document.querySelector('.meta-icon-btn');
  if (firstIcon) firstIcon.classList.add('active');
  ['curto','medio','longo'].forEach(p => { const btn = document.getElementById('metaPrazo_'+p); if(btn) btn.className = 'type-btn'; });
  const title = document.getElementById('metaModalTitle');
  if (title) title.textContent = 'Nova meta';
  const btn = document.getElementById('metaSaveBtn');
  if (btn) btn.textContent = 'Criar meta';
}

function editMeta(id) {
  const m = state.metas.find(x => x.id === id);
  if (!m) return;
  editingMetaId = id;
  document.getElementById('metaNome').value = m.nome || '';
  document.getElementById('metaCat').value = m.cat || 'outro';
  document.getElementById('metaAtual').value = m.atual || '';
  document.getElementById('metaTotal').value = m.total || '';
  document.getElementById('metaEmojiCustom').value = '';
  selectedMetaIcon = m.icon || '🎯';
  selectedMetaPrazo = m.prazo || '';
  document.querySelectorAll('.meta-icon-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === selectedMetaIcon);
  });
  ['curto','medio','longo'].forEach(p => {
    const btn = document.getElementById('metaPrazo_'+p);
    if (btn) btn.className = 'type-btn' + (p === selectedMetaPrazo ? ' sel-pos' : '');
  });
  const title = document.getElementById('metaModalTitle');
  if (title) title.textContent = 'Editar meta';
  const btn = document.getElementById('metaSaveBtn');
  if (btn) btn.textContent = 'Salvar alterações';
  hideBottomNav();
  document.getElementById('modalMeta').classList.add('open');
}

function saveMeta() {
  const nome  = document.getElementById('metaNome').value.trim();
  const cat   = document.getElementById('metaCat').value;
  const atual = parseFloat(document.getElementById('metaAtual').value) || 0;
  const total = parseFloat(document.getElementById('metaTotal').value);
  const emoji = document.getElementById('metaEmojiCustom').value.trim() || selectedMetaIcon;

  if (!nome) { showToast('Dê um nome para a sua meta!'); return; }
  if (!total || isNaN(total) || total <= 0) { showToast('Informe um valor de meta maior que zero!'); return; }
  if (atual < 0) { showToast('O valor atual não pode ser negativo!'); return; }
  if (atual > total) { showToast('O valor atual não pode ser maior que a meta!'); return; }

  if (editingMetaId) {
    const m = state.metas.find(x => x.id === editingMetaId);
    if (m) { m.nome=nome; m.cat=cat; m.prazo=selectedMetaPrazo; m.icon=emoji; m.atual=atual; m.total=total; }
    showToast('Meta atualizada!');
  } else {
    state.metas.push({ id: uid(), nome, cat, prazo: selectedMetaPrazo, icon: emoji, atual, total, criadaEm: new Date().toISOString() });
    showToast('Meta criada!');
  }
  editingMetaId = null;
  saveState();
  closeModal('modalMeta');
  resetMetaForm();
  renderMetas();
  renderHome();
}

function renderMetas() {
  const list = document.getElementById('metasList');
  if (!list) return;
  if (!state.metas.length) {
    list.innerHTML = `<div class="empty-state"><svg class="ti ti-target-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" /> <path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" /> <path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" /> <path d="M3 3l18 18" /></svg><p>Nenhuma meta ainda.<br>Toque no + para criar sua primeira meta.</p></div>`;
    return;
  }
  list.innerHTML = state.metas.map(m => {
    const pct = Math.min(100, Math.round((m.atual / m.total) * 100));
    const prazoLabel = m.prazo === 'curto' ? 'Curto prazo' : m.prazo === 'medio' ? 'Médio prazo' : m.prazo === 'longo' ? 'Longo prazo' : '';
    return `<div class="meta-full-card">
      <div class="meta-full-top">
        <div class="meta-full-icon meta-goal" style="font-size:22px;background:var(--p-pale);">${m.icon || '🎯'}</div>
        <div class="meta-full-info"><h4>${m.nome}</h4><p>${prazoLabel ? prazoLabel + ' · ' : ''}${pct}% guardado</p></div>
        <div style="display:flex;gap:4px;margin-left:auto;">
          <button onclick="editMeta('${m.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:18px;"><svg class="ti ti-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /> <path d="M13.5 6.5l4 4" /></svg></button>
          <button onclick="deleteMeta('${m.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:18px;"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
        </div>
      </div>
      <div class="parcela-progress-meta" style="margin-bottom:5px;font-size:12px;color:var(--gray-500);">
        <span>Guardado: ${fmt(m.atual)}</span><span>${fmt(m.total)}</span>
      </div>
      <div class="bar-bg"><div class="bar-fill green" style="width:${pct}%"></div></div>
      <div style="margin-top:10px;display:flex;gap:7px;">
        <input type="number" placeholder="Adicionar valor..." id="addm_${m.id}" style="flex:1;padding:9px 12px;border:1.5px solid var(--p-border);border-radius:12px;font-size:13px;font-family:'Montserrat',sans-serif;outline:none;color:var(--gray-900);background:var(--p-pale);" oninput="this.style.borderColor='var(--p1)'"/>
        <button onclick="addToMeta('${m.id}')" style="padding:9px 16px;background:var(--grad);color:white;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px var(--p-shadow);"><svg class="ti ti-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14" /> <path d="M5 12l14 0" /></svg></button>
      </div>
    </div>`;
  }).join('') + `<button class="add-btn" onclick="openModal('meta')"><svg class="ti ti-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14" /> <path d="M5 12l14 0" /></svg> Nova meta</button>`;
}

function addToMeta(id) {
  const inp = document.getElementById('addm_'+id);
  const val = parseFloat(inp.value);
  if (!val || val <= 0) return;
  const m = state.metas.find(x => x.id === id);
  m.atual = Math.min(m.total, m.atual + val);
  if (m.atual >= m.total) {
    // Move to conquistas
    if (!state.conquistas) state.conquistas = [];
    state.conquistas.push({ nome: m.nome, icon: m.icon, data: new Date().toLocaleDateString('pt-BR', { month:'long', year:'numeric' }) });
    state.metas = state.metas.filter(x => x.id !== id);
    showToast('Meta conquistada! 🎉');
    renderDividas(); // update conquistas section
  } else {
    showToast('Progresso atualizado!');
  }
  inp.value = '';
  saveState(); renderMetas(); renderHome();
}
function deleteMeta(id) { state.metas = state.metas.filter(m => m.id !== id); saveState(); renderMetas(); renderHome(); showToast('Meta removida!'); }

// ════════════════════════════
// DÍVIDAS
// ════════════════════════════
let dividaParcelado = false;
let editingDividaId = null;
function toggleDividaParcelado() {
  dividaParcelado = !dividaParcelado;
  const track = document.getElementById('toggleDividaTrack');
  const wrap  = document.getElementById('dividaParcelasWrap');
  track.classList.toggle('on', dividaParcelado);
  wrap.style.display = dividaParcelado ? 'block' : 'none';
  calcDividaParcela();
}
function calcDividaParcela() {
  const total = parseFloat(document.getElementById('dividaValor').value) || 0;
  const qtd   = parseInt(document.getElementById('dividaQtd').value) || 1;
  const el = document.getElementById('dividaParcelaCalc');
  if (el) el.textContent = fmt(total / qtd);
}
function resetDividaForm() {
  ['dividaNome','dividaValor','dividaVenc','dividaQtd'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  dividaParcelado = false;
  const track = document.getElementById('toggleDividaTrack');
  if (track) track.classList.remove('on');
  const wrap = document.getElementById('dividaParcelasWrap');
  if (wrap) wrap.style.display = 'none';
  const title = document.getElementById('dividaModalTitle');
  if (title) title.textContent = 'Nova dívida';
  const btn = document.getElementById('dividaSaveBtn');
  if (btn) btn.textContent = 'Registrar dívida';
}
function editDivida(id) {
  const d = (state.dividas||[]).find(x => x.id === id);
  if (!d) return;
  editingDividaId = id;
  document.getElementById('dividaNome').value = d.nome || '';
  document.getElementById('dividaValor').value = d.valor || '';
  document.getElementById('dividaVenc').value = d.venc || '';
  dividaParcelado = !!d.parcelado;
  const track = document.getElementById('toggleDividaTrack');
  const wrap  = document.getElementById('dividaParcelasWrap');
  if (track) track.classList.toggle('on', dividaParcelado);
  if (wrap) wrap.style.display = dividaParcelado ? 'block' : 'none';
  if (dividaParcelado) { document.getElementById('dividaQtd').value = d.qtd || ''; calcDividaParcela(); }
  const title = document.getElementById('dividaModalTitle');
  if (title) title.textContent = 'Editar dívida';
  const btn = document.getElementById('dividaSaveBtn');
  if (btn) btn.textContent = 'Salvar alterações';
  hideBottomNav();
  document.getElementById('modalDivida').classList.add('open');
}
function saveDivida() {
  const nome  = document.getElementById('dividaNome').value.trim();
  const valor = parseFloat(document.getElementById('dividaValor').value);
  const venc  = document.getElementById('dividaVenc').value;

  if (!nome) { showToast('Informe o nome da dívida!'); return; }
  if (!valor || isNaN(valor) || valor <= 0) { showToast('Informe um valor maior que zero!'); return; }

  const qtd = dividaParcelado ? parseInt(document.getElementById('dividaQtd').value) || 0 : 1;
  if (dividaParcelado && (!qtd || qtd < 2)) { showToast('Informe o número de parcelas (mínimo 2)!'); return; }

  state.dividas = state.dividas || [];
  if (editingDividaId) {
    const d = state.dividas.find(x => x.id === editingDividaId);
    if (d) { d.nome=nome; d.valor=valor; d.venc=venc; d.parcelado=dividaParcelado; d.qtd=qtd; }
    showToast('Dívida atualizada!');
  } else {
    state.dividas.push({ id: uid(), nome, valor, pago: 0, venc, parcelado: dividaParcelado, qtd, pagas: 0, ultimoPagamento: null, criadaEm: new Date().toISOString() });
    showToast('Dívida registrada!');
  }
  editingDividaId = null;
  saveState(); closeModal('modalDivida');
  resetDividaForm();
  renderDividas();
}
function renderDividas() {
  const list = document.getElementById('dividasList');
  if (!list) return;
  state.dividas = state.dividas || [];
  state.conquistas = state.conquistas || [];
  const totalDevido = state.dividas.reduce((a,d) => a + (d.valor - d.pago), 0);
  // Total banner
  const banner = document.getElementById('dividasTotal');
  if (banner) {
    if (state.dividas.length) {
      banner.style.display = 'block';
      document.getElementById('dividasTotalVal').textContent = fmt(totalDevido);
    } else {
      banner.style.display = 'none';
    }
  }
  // Conquistas
  let conquistasHTML = '';
  if (state.conquistas.length) {
    conquistasHTML = `<div class="conquista-wrap">
      <div class="conquista-title"><svg class="ti ti-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21l8 0" /> <path d="M12 17l0 4" /> <path d="M7 4l10 0" /> <path d="M17 4v8a5 5 0 0 1 -10 0v-8" /> <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg> Suas conquistas financeiras</div>
      ${state.conquistas.map(c => `<div class="conquista-item"><svg class="ti ti-circle-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M9 12l2 2l4 -4" /></svg>${c.icon || '🎯'} ${c.nome} — quitada em ${c.data}</div>`).join('')}
    </div>`;
  }
  if (!state.dividas.length) {
    list.innerHTML = conquistasHTML + `<div class="empty-state" style="padding:30px 20px;"><svg class="ti ti-mood-happy" style="color:var(--green);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M9 9l.01 0" /> <path d="M15 9l.01 0" /> <path d="M8 13a4 4 0 1 0 8 0h-8" /></svg><p style="color:var(--green);font-weight:700;font-size:14px;">Parabéns, você não tem dívidas!</p><p style="font-size:12px;color:var(--gray-500);margin-top:4px;">Continue assim e continue controlando suas finanças.</p></div>`;
    return;
  }
  list.innerHTML = conquistasHTML + state.dividas.map(d => {
    const restante = d.valor - d.pago;
    const pct = Math.round((d.pago / d.valor) * 100);
    const vencStr = d.venc ? new Date(d.venc + 'T00:00:00').toLocaleDateString('pt-BR') : '—';
    const parcelaVal = d.parcelado && d.qtd ? fmt((d.valor - d.pago) / (d.qtd - d.pagas)) : '';
    const pagoEsteMes = d.ultimoPagamento === currentYYYYMM();
    const btnLabel = pagoEsteMes
      ? (d.parcelado ? 'Parcela paga' : 'Pagamento registrado')
      : (d.parcelado ? 'Pagar parcela' : 'Registrar pagamento');
    return `<div class="divida-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div>
          <div class="divida-nome">${d.nome}</div>
          <div class="divida-valor">- ${fmt(restante)}</div>
        </div>
        <div style="display:flex;gap:4px;">
          <button onclick="editDivida('${d.id}')" class="divida-del-btn" aria-label="Editar"><svg class="ti ti-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /> <path d="M13.5 6.5l4 4" /></svg></button>
          <button onclick="deleteDivida('${d.id}')" class="divida-del-btn" aria-label="Excluir"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
        </div>
      </div>
      <div class="divida-info">
        <span><svg class="ti ti-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /> <path d="M16 3v4" /> <path d="M8 3v4" /> <path d="M4 11h16" /> <path d="M11 15h1" /> <path d="M12 15v3" /></svg> Vence: ${vencStr}</span>
        ${d.parcelado ? `<span><svg class="ti ti-list-numbers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6h9" /> <path d="M11 12h9" /> <path d="M12 18h8" /> <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /> <path d="M6 10v-6l-2 2" /></svg> ${d.qtd}x de ${parcelaVal}</span>` : ''}
        <span><svg class="ti ti-coin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /> <path d="M12 7v10" /></svg> Pago: ${fmt(d.pago)}</span>
      </div>
      <div class="divida-prog">
        <div class="divida-prog-meta"><span>Quitado: ${pct}%</span><span>Total: ${fmt(d.valor)}</span></div>
        <div class="divida-bar-bg"><div class="divida-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="divida-actions">
        <button class="divida-pagar-btn ${pagoEsteMes ? '' : 'pending'}" onclick="pagarDivida('${d.id}')"><svg class="ti ti-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> ${btnLabel}</button>
      </div>
    </div>`;
  }).join('');
}
function pagarDivida(id) {
  const d = state.dividas.find(x => x.id === id);
  if (!d) return;
  const mesAtual = currentYYYYMM();
  const parcVal = d.parcelado && d.qtd ? (d.valor / d.qtd) : d.valor;
  if (d.ultimoPagamento === mesAtual) {
    // Desfaz o pagamento marcado neste mês (correção de toque acidental)
    d.pago = Math.max(0, d.pago - parcVal);
    d.pagas = Math.max(0, (d.pagas || 0) - 1);
    d.ultimoPagamento = null;
    showToast('Pagamento desfeito.');
  } else {
    d.pago = Math.min(d.valor, d.pago + parcVal);
    d.pagas = (d.pagas || 0) + 1;
    d.ultimoPagamento = mesAtual;
    if (d.pago >= d.valor) {
      if (!state.conquistas) state.conquistas = [];
      state.conquistas.push({ nome: d.nome, icon: '💸', data: new Date().toLocaleDateString('pt-BR',{month:'long',year:'numeric'}) });
      state.dividas = state.dividas.filter(x => x.id !== id);
      showToast('Dívida quitada!');
    } else {
      showToast('Pagamento registrado!');
    }
  }
  saveState(); renderDividas();
}
function deleteDivida(id) { state.dividas = (state.dividas||[]).filter(d => d.id !== id); saveState(); renderDividas(); showToast('Removida!'); }

// ════════════════════════════
// PARCELAS (nova versão)
// ════════════════════════════
let parcelaManual = false;
function toggleParcelaManual() {
  parcelaManual = !parcelaManual;
  const track = document.getElementById('toggleParcelaTrack');
  const wrap  = document.getElementById('parcelaManualWrap');
  const lbl   = document.getElementById('pValorLabel');
  track.classList.toggle('on', parcelaManual);
  wrap.style.display = parcelaManual ? 'block' : 'none';
  lbl.textContent = parcelaManual ? 'Valor inserido manualmente' : 'Valor calculado automaticamente';
}
function autoCalcParcela() {
  if (parcelaManual) return;
  // just visual feedback, actual calc on save
}
let editingParcelaId = null;

function saveParcela() {
  const desc  = document.getElementById('pDesc').value.trim();
  const total = parseFloat(document.getElementById('pTotal').value);
  const qtd   = parseInt(document.getElementById('pQtd').value);
  const pagas = parseInt(document.getElementById('pPagas').value) || 0;
  const cat   = document.getElementById('pCat').value;
  const data  = document.getElementById('pDataPgto').value;
  const cartao = document.getElementById('pCartaoSel').value;

  if (!desc) { showToast('Informe o nome da parcela!'); return; }
  if (!total || isNaN(total) || total <= 0) { showToast('Informe um valor total maior que zero!'); return; }
  if (!qtd || qtd < 2) { showToast('Informe o total de parcelas (mínimo 2)!'); return; }
  if (pagas < 0) { showToast('Parcelas já pagas não pode ser negativo!'); return; }
  if (pagas >= qtd) { showToast('Parcelas já pagas deve ser menor que o total de parcelas!'); return; }

  const valorParcelaManual = parseFloat(document.getElementById('pValorManual').value);
  if (parcelaManual && (!valorParcelaManual || isNaN(valorParcelaManual) || valorParcelaManual <= 0)) {
    showToast('Informe um valor de parcela manual maior que zero!'); return;
  }

  const valorParcela = parcelaManual ? valorParcelaManual : total / qtd;
  if (editingParcelaId) {
    const p = state.parcelas.find(x => x.id === editingParcelaId);
    if (p) { p.desc=desc; p.total=total; p.qtd=qtd; p.paga=pagas+1; p.valorParcela=valorParcela; p.cat=cat; p.dataPgto=data; p.cartao=cartao; }
    showToast('Parcela atualizada!');
  } else {
    state.parcelas.push({ id: uid(), desc, total, qtd, paga: pagas + 1, valorParcela, cat, dataPgto: data, cartao, ultimoPagamento: null, criadaEm: new Date().toISOString() });
    showToast('Parcela adicionada!');
  }
  editingParcelaId = null;
  saveState(); closeModal('modalParcela');
  ['pDesc','pTotal','pQtd','pPagas','pDataPgto','pValorManual'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  parcelaManual = false;
  const track = document.getElementById('toggleParcelaTrack');
  if (track) track.classList.remove('on');
  const wrap = document.getElementById('parcelaManualWrap');
  if (wrap) wrap.style.display = 'none';
  resetParcelaForm();
  renderParcelas();
}

function resetParcelaForm() {
  const title = document.getElementById('parcelaModalTitle');
  if (title) title.textContent = 'Nova parcela';
  const btn = document.getElementById('parcelaSaveBtn');
  if (btn) btn.textContent = 'Adicionar parcela';
}

function editParcela(id) {
  const p = state.parcelas.find(x => x.id === id);
  if (!p) return;
  editingParcelaId = id;
  updateCartaoSelect();
  document.getElementById('pDesc').value = p.desc || '';
  document.getElementById('pTotal').value = p.total || '';
  document.getElementById('pQtd').value = p.qtd || '';
  document.getElementById('pPagas').value = Math.max(0, (p.paga || 1) - 1);
  document.getElementById('pCat').value = p.cat || 'outros';
  document.getElementById('pDataPgto').value = p.dataPgto || '';
  const sel = document.getElementById('pCartaoSel');
  if (sel) sel.value = p.cartao || '';
  // Se a parcela tem valor manual (diferente de total/qtd), preenche o toggle
  const autoVal = p.total / p.qtd;
  if (Math.abs((p.valorParcela || autoVal) - autoVal) > 0.01) {
    parcelaManual = true;
    document.getElementById('pValorManual').value = p.valorParcela;
    const track = document.getElementById('toggleParcelaTrack');
    if (track) track.classList.add('on');
    const wrap = document.getElementById('parcelaManualWrap');
    if (wrap) wrap.style.display = 'block';
    const lbl = document.getElementById('pValorLabel');
    if (lbl) lbl.textContent = 'Valor inserido manualmente';
  }
  const title = document.getElementById('parcelaModalTitle');
  if (title) title.textContent = 'Editar parcela';
  const btn = document.getElementById('parcelaSaveBtn');
  if (btn) btn.textContent = 'Salvar alterações';
  hideBottomNav();
  document.getElementById('modalParcela').classList.add('open');
}

function renderParcelas() {
  const list  = document.getElementById('parcelasList');
  const countEl = document.getElementById('parcelaCount');
  if (!list) return;
  const busca = (document.getElementById('parcelaBusca')?.value || '').toLowerCase();
  const filtered = state.parcelas.filter(p => !busca || p.desc.toLowerCase().includes(busca));
  if (countEl) countEl.textContent = state.parcelas.length;
  const today = new Date().getDate();
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><svg class="ti ti-list-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /> <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /> <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /> <path d="M11 6l9 0" /> <path d="M11 12l9 0" /> <path d="M11 18l9 0" /></svg><p>${busca ? 'Nenhuma parcela encontrada.' : 'Nenhuma parcela registrada.<br>Adicione uma agora.'}</p></div>`;
    const sub = document.getElementById('parcelas-subtitle');
    if (sub) sub.textContent = 'Nenhuma parcela';
    return;
  }
  const totalMes = state.parcelas.reduce((a,p) => a + (p.valorParcela || p.total/p.qtd), 0);
  const sub = document.getElementById('parcelas-subtitle');
  if (sub) sub.textContent = 'Total mensal: ' + fmt(totalMes);
  list.innerHTML = filtered.map(p => {
    const paga = p.paga || 1;
    const pct  = Math.round((paga / p.qtd) * 100);
    const vp   = p.valorParcela || p.total / p.qtd;
    const pagoEsteMes = p.ultimoPagamento === currentYYYYMM();
    // date from dataPgto or dia field
    let vencTxt = '', vc = 'vence-ok', vi = 'ti-circle-check';
    if (p.dataPgto) {
      const d = new Date(p.dataPgto + 'T00:00:00');
      const diff = Math.ceil((d - new Date()) / 86400000);
      vencTxt = diff < 0 ? 'Vencida!' : diff === 0 ? 'Vence hoje!' : `Vence em ${diff} dias`;
      if (diff < 0) { vc='vence-danger'; vi='ti-alert-circle'; }
      else if (diff <= 2) { vc='vence-danger'; vi='ti-alert-circle'; }
      else if (diff <= 5) { vc='vence-warn'; vi='ti-clock'; }
    } else if (p.dia) {
      const diff = p.dia - today;
      vencTxt = diff < 0 ? 'Vencida!' : `Vence dia ${p.dia}`;
      if (diff < 0) { vc='vence-danger'; vi='ti-alert-circle'; }
    }
    const info = catInfo(p.cat || 'outros');
    const cartaoTag = p.cartao ? `<span style="background:var(--p-pale);color:var(--p1);font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">${p.cartao}</span>` : '';
    const pagarBtn = pagoEsteMes
      ? `<button onclick="pagarParcela('${p.id}')" style="background:var(--green-light);color:var(--green);border:1px solid var(--green);border-radius:99px;padding:4px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:'Montserrat',sans-serif;display:flex;align-items:center;gap:4px;"><svg class="ti ti-check" style="font-size:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg>Pago</button>`
      : `<button onclick="pagarParcela('${p.id}')" style="background:var(--p-pale);color:var(--p1);border:1px solid var(--p-border);border-radius:99px;padding:4px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:'Montserrat',sans-serif;display:flex;align-items:center;gap:4px;"><svg class="ti ti-check" style="font-size:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg>Pagar</button>`;
    return `<div class="parcela-card">
      <div class="parcela-top">
        <div>
          <div class="parcela-name-row">${iconSvg(info.icon, 'style="color:var(--p1);font-size:16px;"')}<div class="parcela-name">${p.desc}</div></div>
          <div class="parcela-sub">${p.qtd}x de ${fmt(vp)} ${cartaoTag}</div>
        </div>
        <div class="parcela-val">${fmt(vp)}/mês</div>
      </div>
      <div style="margin-bottom:7px;">
        <div class="parcela-progress-meta"><span>Parcela ${paga} de ${p.qtd}</span><span>${pct}%</span></div>
        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;flex-wrap:wrap;gap:6px;">
        ${vencTxt ? `<span class="vence-pill ${vc}">${iconSvg(vi)}${vencTxt}</span>` : '<span></span>'}
        <div style="display:flex;gap:7px;">
          ${pagarBtn}
          <button onclick="editParcela('${p.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:16px;"><svg class="ti ti-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /> <path d="M13.5 6.5l4 4" /></svg></button>
          <button onclick="deleteParcela('${p.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:16px;"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ════════════════════════════
// CARTÕES
// ════════════════════════════
// Selo colorido por banco (monograma + cor de marca aproximada).
// Não reproduz o logotipo oficial de cada instituição — apenas um
// selo de identificação visual no mesmo espírito de apps como
// Mobills/Organizze, evitando qualquer questão de direito de marca.
const BANK_BADGES = {
  'nubank':           { color:'#820AD1', letter:'N' },
  'itaú':             { color:'#EC7000', letter:'I' },
  'itau':             { color:'#EC7000', letter:'I' },
  'bradesco':         { color:'#CC092F', letter:'B' },
  'santander':        { color:'#EC0000', letter:'S' },
  'caixa':            { color:'#0070AE', letter:'C' },
  'banco do brasil':  { color:'#FAE221', letter:'BB', dark:true },
  'inter':            { color:'#FF7A00', letter:'I' },
  'c6 bank':          { color:'#1A1A1A', letter:'C6' },
  'picpay':           { color:'#21C25E', letter:'P' },
  'mercado pago':     { color:'#00AAEF', letter:'M' },
  'xp':               { color:'#0C0C0C', letter:'XP' }
};
function bancoLogoHTML(banco) {
  const key = (banco || '').trim().toLowerCase();
  const b = BANK_BADGES[key];
  if (b) {
    return `<div class="cartao-chip" style="background:${b.color};color:${b.dark ? '#1A1A1A' : '#FFFFFF'};">${b.letter}</div>`;
  }
  // Banco não reconhecido (digitado em "Outro"): selo genérico com a
  // primeira letra do nome informado, em tom neutro.
  const inicial = (banco || '?').trim().charAt(0).toUpperCase() || '?';
  return `<div class="cartao-chip" style="background:rgba(255,255,255,0.25);color:#FFFFFF;">${inicial}</div>`;
}

function toggleCartaoBancoOutro() {
  const sel  = document.getElementById('cartaoBanco');
  const wrap = document.getElementById('cartaoBancoOutroWrap');
  wrap.style.display = sel.value === 'Outro' ? 'block' : 'none';
}

let editingCartaoId = null;

function saveCartao() {
  const nome   = document.getElementById('cartaoNome').value.trim();
  let   banco  = document.getElementById('cartaoBanco').value;
  if (banco === 'Outro') {
    const outroNome = document.getElementById('cartaoBancoOutro').value.trim();
    if (!outroNome) { showToast('Informe o nome da instituição bancária!'); return; }
    banco = outroNome;
  }
  const fecha  = parseInt(document.getElementById('cartaoFecha').value);
  const vence  = parseInt(document.getElementById('cartaoVence').value);
  const limite = parseFloat(document.getElementById('cartaoLimite').value) || 0;
  const fatura = parseFloat(document.getElementById('cartaoFatura').value) || 0;

  if (!nome) { showToast('Informe o nome do cartão!'); return; }
  if (fecha && (fecha < 1 || fecha > 31)) { showToast('Dia de fechamento deve ser entre 1 e 31!'); return; }
  if (vence && (vence < 1 || vence > 31)) { showToast('Dia de vencimento deve ser entre 1 e 31!'); return; }
  if (limite < 0) { showToast('O limite não pode ser negativo!'); return; }
  if (fatura < 0) { showToast('A fatura não pode ser negativa!'); return; }

  state.cartoes = state.cartoes || [];
  if (editingCartaoId) {
    const c = state.cartoes.find(x => x.id === editingCartaoId);
    if (c) { c.nome=nome; c.banco=banco; c.fecha=fecha; c.vence=vence; c.limite=limite; c.fatura=fatura; }
    showToast('Cartão atualizado!');
  } else {
    state.cartoes.push({ id: uid(), nome, banco, fecha, vence, limite, fatura });
    showToast('Cartão adicionado!');
  }
  editingCartaoId = null;
  saveState(); closeModal('modalCartao');
  resetCartaoForm();
  renderCartoes();
  updateCartaoSelect();
}

function resetCartaoForm() {
  ['cartaoNome','cartaoFecha','cartaoVence','cartaoLimite','cartaoFatura','cartaoBancoOutro'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  const wrap = document.getElementById('cartaoBancoOutroWrap');
  if (wrap) wrap.style.display = 'none';
  const sel = document.getElementById('cartaoBanco');
  if (sel) sel.selectedIndex = 0;
  const title = document.getElementById('cartaoModalTitle');
  if (title) title.textContent = 'Novo cartão';
  const btn = document.getElementById('cartaoSaveBtn');
  if (btn) btn.textContent = 'Adicionar cartão';
}

function editCartao(id) {
  const c = (state.cartoes || []).find(x => x.id === id);
  if (!c) return;
  editingCartaoId = id;
  document.getElementById('cartaoNome').value = c.nome || '';
  document.getElementById('cartaoFecha').value = c.fecha || '';
  document.getElementById('cartaoVence').value = c.vence || '';
  document.getElementById('cartaoLimite').value = c.limite || '';
  document.getElementById('cartaoFatura').value = c.fatura || '';
  const sel = document.getElementById('cartaoBanco');
  const wrap = document.getElementById('cartaoBancoOutroWrap');
  const opcoes = Array.from(sel.options).map(o => o.value);
  if (opcoes.includes(c.banco)) {
    sel.value = c.banco;
    wrap.style.display = 'none';
  } else {
    sel.value = 'Outro';
    wrap.style.display = 'block';
    document.getElementById('cartaoBancoOutro').value = c.banco || '';
  }
  const title = document.getElementById('cartaoModalTitle');
  if (title) title.textContent = 'Editar cartão';
  const btn = document.getElementById('cartaoSaveBtn');
  if (btn) btn.textContent = 'Salvar alterações';
  hideBottomNav();
  document.getElementById('modalCartao').classList.add('open');
}


function renderCartoes() {
  const list = document.getElementById('cartoesList');
  if (!list) return;
  state.cartoes = state.cartoes || [];
  if (!state.cartoes.length) {
    list.innerHTML = `<div class="empty-state"><svg class="ti ti-credit-card-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18" /> <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" /> <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" /> <path d="M3 11l8 0" /> <path d="M15 11l6 0" /> <path d="M7 15l.01 0" /> <path d="M11 15l2 0" /></svg><p>Nenhum cartão cadastrado.<br>Adicione um cartão para começar<br>a controlar suas faturas.</p></div>`;
    return;
  }
  list.innerHTML = state.cartoes.map(c => {
    const usado = c.limite ? Math.round((c.fatura / c.limite) * 100) : 0;
    return `<div class="cartao-card">
      <div class="cartao-actions">
        <button class="cartao-del" onclick="editCartao('${c.id}')" aria-label="Editar"><svg class="ti ti-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /> <path d="M13.5 6.5l4 4" /></svg></button>
        <button class="cartao-del" onclick="deleteCartao('${c.id}')" aria-label="Excluir"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
      </div>
      ${bancoLogoHTML(c.banco)}
      <div class="cartao-nome">${c.nome}</div>
      <div class="cartao-banco">${c.banco}</div>
      <div class="cartao-row">
        <div><div class="cartao-label">Fatura atual</div><div class="cartao-val">${c.fatura ? fmt(c.fatura) : '—'}</div></div>
        <div><div class="cartao-label">Limite</div><div class="cartao-val">${c.limite ? fmt(c.limite) : '—'}</div></div>
        <div><div class="cartao-label">Fecha dia</div><div class="cartao-val">${c.fecha || '—'}</div></div>
        <div><div class="cartao-label">Vence dia</div><div class="cartao-val">${c.vence || '—'}</div></div>
      </div>
      ${c.limite ? `<div style="margin-top:12px;"><div class="bar-bg" style="background:rgba(255,255,255,0.25);height:4px;"><div style="height:100%;border-radius:99px;background:white;width:${Math.min(100,usado)}%;transition:width 0.8s;"></div></div><div style="font-size:10px;opacity:0.75;margin-top:4px;">${usado}% do limite usado</div></div>` : ''}
    </div>`;
  }).join('');
}
function deleteCartao(id) {
  state.cartoes = (state.cartoes||[]).filter(c => c.id !== id);
  saveState(); renderCartoes(); updateCartaoSelect(); showToast('Cartão removido!');
}
function updateCartaoSelect() {
  const sel = document.getElementById('pCartaoSel');
  if (!sel) return;
  state.cartoes = state.cartoes || [];
  sel.innerHTML = '<option value="">Nenhum</option>' + state.cartoes.map(c => `<option value="${c.nome}">${c.nome} — ${c.banco}</option>`).join('');
}

// Hook into openModal for new modals
function openModal(type) {
  // Esconde a barra de navegação inferior enquanto o modal está aberto —
  // evita qualquer disputa de camadas (z-index) entre os dois, garantindo
  // que cores, toggle de modo escuro e botão de confirmar fiquem sempre
  // acessíveis, independente do navegador/dispositivo.
  hideBottomNav();
  if (type === 'meta')       { editingMetaId = null; resetMetaForm(); document.getElementById('modalMeta').classList.add('open'); return; }
  if (type === 'divida')     { editingDividaId = null; resetDividaForm(); document.getElementById('modalDivida').classList.add('open'); return; }
  if (type === 'cartao')     { editingCartaoId = null; resetCartaoForm(); updateCartaoSelect(); document.getElementById('modalCartao').classList.add('open'); return; }
  if (type === 'parcela')    { editingParcelaId = null; resetParcelaForm(); updateCartaoSelect(); document.getElementById('modalParcela').classList.add('open'); return; }
  if (type === 'tema')       { buildThemeGrid(); document.getElementById('modalTema').classList.add('open'); return; }
  if (type === 'editNome')   { const el = document.getElementById('editNomeInput'); if(el) el.value = state.userName||''; document.getElementById('modalEditNome').classList.add('open'); return; }
  if (type === 'gasto')      { document.getElementById('modalGasto').classList.add('open'); return; }
  if (type === 'limites')    { openLimitesModal(); document.getElementById('modalLimites').classList.add('open'); return; }
  if (type === 'categorias') { openCategoriasModal(); document.getElementById('modalCategorias').classList.add('open'); return; }
  if (type === 'filtroCategoria') { buildFiltroCategoriaList(); document.getElementById('modalFiltroCategoria').classList.add('open'); return; }
}

// ════════════════════════════
// PERÍODO DE FILTRO DE GASTOS
// ════════════════════════════
let periodoAtivo = 'mes';
let periodoFiltro = { ini: null, fim: null };

function setPeriodo(tipo) {
  periodoAtivo = tipo;
  ['dia','semana','mes','custom'].forEach(t => {
    document.getElementById('pc-'+t).classList.toggle('active', t === tipo);
    const p = document.getElementById('panel-'+t);
    if(p) p.style.display = t === tipo ? (t === 'mes' ? 'flex' : 'block') : 'none';
  });
  if(tipo === 'mes') buildMesChips();
  if(tipo === 'dia') {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('filtro-dia').value = today;
    applyPeriodo();
  }
  if(tipo === 'semana') {
    const now = new Date();
    const day = now.getDay();
    const ini = new Date(now); ini.setDate(now.getDate() - day + 1);
    const fim = new Date(ini); fim.setDate(ini.getDate() + 6);
    document.getElementById('filtro-sem-ini').value = ini.toISOString().split('T')[0];
    document.getElementById('filtro-sem-fim').value = fim.toISOString().split('T')[0];
    applyPeriodo();
  }
}

function buildMesChips() {
  const wrap = document.getElementById('mes-chips-wrap');
  if(!wrap) return;
  const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const now = new Date();
  let chips = '';
  for(let i = -2; i <= 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = months[d.getMonth()] + ' de ' + d.getFullYear();
    const val = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0');
    const isActive = i === 0;
    chips += `<button class="mes-chip ${isActive?'active':''}" data-val="${val}" onclick="selectMes(this,'${val}')">${label}</button>`;
  }
  wrap.innerHTML = chips;
  // Apply current month by default
  const curVal = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');
  applyMes(curVal);
}

function selectMes(btn, val) {
  document.querySelectorAll('.mes-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  applyMes(val);
}

function applyMes(val) {
  const [y, m] = val.split('-').map(Number);
  periodoFiltro.ini = new Date(y, m-1, 1);
  periodoFiltro.fim = new Date(y, m, 0, 23, 59, 59);
  renderGastos();
}

function applyPeriodo() {
  if(periodoAtivo === 'dia') {
    const v = document.getElementById('filtro-dia').value;
    if(!v) return;
    const d = new Date(v + 'T00:00:00');
    periodoFiltro.ini = new Date(d); periodoFiltro.ini.setHours(0,0,0,0);
    periodoFiltro.fim = new Date(d); periodoFiltro.fim.setHours(23,59,59,999);
  } else if(periodoAtivo === 'semana') {
    const vi = document.getElementById('filtro-sem-ini').value;
    const vf = document.getElementById('filtro-sem-fim').value;
    if(!vi || !vf) return;
    periodoFiltro.ini = new Date(vi + 'T00:00:00');
    periodoFiltro.fim = new Date(vf + 'T23:59:59');
  } else if(periodoAtivo === 'custom') {
    const vi = document.getElementById('filtro-custom-ini').value;
    const vf = document.getElementById('filtro-custom-fim').value;
    if(!vi || !vf) return;
    periodoFiltro.ini = new Date(vi + 'T00:00:00');
    periodoFiltro.fim = new Date(vf + 'T23:59:59');
  }
  renderGastos();
}

function limparPeriodo() {
  periodoFiltro = { ini: null, fim: null };
  ['filtro-custom-ini','filtro-custom-fim'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  renderGastos();
}

function getGastosFiltradosPorPeriodo(gastos) {
  if(!periodoFiltro.ini || !periodoFiltro.fim) return gastos;
  return gastos.filter(g => {
    if(!g.dataISO) return true; // legacy items without ISO date always show
    const d = new Date(g.dataISO);
    return d >= periodoFiltro.ini && d <= periodoFiltro.fim;
  });
}

// ════════════════════════════
// LIMITES MENSAIS
// ════════════════════════════
const CAT_LIST = [
  {key:'maquiagem',label:'Maquiagem',icon:'ti-palette'},
  {key:'skincare',label:'Skincare',icon:'ti-droplet'},
  {key:'beleza',label:'Beleza',icon:'ti-scissors'},
  {key:'cuidados',label:'Cuidados pessoais',icon:'ti-heart'},
  {key:'cabelo',label:'Cabelo',icon:'ti-scissors'},
  {key:'unhas',label:'Unhas',icon:'ti-hand-finger'},
  {key:'perfume',label:'Perfumaria',icon:'ti-spray'},
  {key:'farmacia',label:'Farmácia',icon:'ti-first-aid-kit'},
  {key:'saude',label:'Saúde',icon:'ti-pill'},
  {key:'academia',label:'Academia',icon:'ti-barbell'},
  {key:'terapia',label:'Terapia',icon:'ti-brain'},
  {key:'transporte',label:'Transporte',icon:'ti-car'},
  {key:'combustivel',label:'Combustível',icon:'ti-gas-station'},
  {key:'estacionamento',label:'Estacionamento',icon:'ti-parking-circle'},
  {key:'delivery',label:'Delivery',icon:'ti-bike'},
  {key:'restaurante',label:'Restaurante',icon:'ti-tools-kitchen-2'},
  {key:'feira',label:'Feira / Mercado',icon:'ti-building-store'},
  {key:'cafe',label:'Café',icon:'ti-coffee'},
  {key:'bebidas',label:'Bebidas',icon:'ti-glass-cocktail'},
  {key:'shopee',label:'Shopee',icon:'ti-package'},
  {key:'shein',label:'Shein',icon:'ti-shopping-bag'},
  {key:'amazon',label:'Amazon',icon:'ti-brand-amazon'},
  {key:'mercadolivre',label:'Mercado Livre',icon:'ti-shopping-cart'},
  {key:'roupas',label:'Roupas',icon:'ti-shirt'},
  {key:'calcados',label:'Calçados',icon:'ti-shoe'},
  {key:'eletronicos',label:'Eletrônicos',icon:'ti-device-mobile'},
  {key:'aluguel',label:'Aluguel',icon:'ti-home'},
  {key:'condominio',label:'Condomínio',icon:'ti-building'},
  {key:'energia',label:'Energia',icon:'ti-bolt'},
  {key:'agua',label:'Água',icon:'ti-droplet-half-2'},
  {key:'internet',label:'Internet',icon:'ti-wifi'},
  {key:'casa',label:'Casa',icon:'ti-home-2'},
  {key:'moveis',label:'Móveis',icon:'ti-sofa'},
  {key:'educacao',label:'Educação',icon:'ti-school'},
  {key:'curso',label:'Curso',icon:'ti-certificate'},
  {key:'livros',label:'Livros',icon:'ti-book'},
  {key:'trabalho',label:'Trabalho',icon:'ti-briefcase'},
  {key:'lazer',label:'Lazer',icon:'ti-ticket'},
  {key:'viagem',label:'Viagem',icon:'ti-plane'},
  {key:'streaming',label:'Streaming',icon:'ti-device-tv'},
  {key:'cinema',label:'Cinema',icon:'ti-movie'},
  {key:'pet',label:'Pet',icon:'ti-paw'},
  {key:'impostos',label:'Impostos',icon:'ti-receipt-tax'},
  {key:'assinatura',label:'Assinatura',icon:'ti-repeat'},
  {key:'presente',label:'Presente',icon:'ti-gift'},
  {key:'doacao',label:'Doação',icon:'ti-hand-heart'},
  {key:'outros',label:'Outros',icon:'ti-dots-circle-horizontal'},
];

function openLimitesModal() {
  state.limites = state.limites || {};
  const content = document.getElementById('limitesContent');
  const gastosMes = state.gastos.filter(g => g.tipo === 'neg');
  content.innerHTML = CAT_LIST.concat((state.customCats||[]).map(c=>({key:c.key,label:c.nome,icon:null,emoji:c.emoji}))).map(cat => {
    const gasto = gastosMes.filter(g=>g.cat===cat.key).reduce((a,g)=>a+g.valor,0);
    const limite = state.limites[cat.key] || '';
    const pct = limite ? Math.round((gasto/limite)*100) : 0;
    const over = limite && gasto > limite;
    return `<div class="limite-row">
      <div class="limite-cat-icon">${cat.emoji ? cat.emoji : iconSvg(cat.icon)}</div>
      <div style="flex:1;">
        <div class="limite-label">${cat.label}</div>
        <div style="font-size:11px;color:${over?'var(--red)':'var(--gray-500)'};">Gasto: R$${gasto.toFixed(2)}${limite?' / R$'+Number(limite).toFixed(2)+' ('+pct+'%)'  :''}</div>
      </div>
      <input class="limite-input" type="number" placeholder="R$ —" value="${limite}" id="lim_${cat.key}" step="0.01"/>
    </div>`;
  }).join('');
}

function salvarLimites() {
  state.limites = state.limites || {};
  CAT_LIST.concat((state.customCats||[]).map(c=>({key:c.key}))).forEach(cat => {
    const el = document.getElementById('lim_'+cat.key);
    if(el) { const v = parseFloat(el.value); state.limites[cat.key] = v || 0; }
  });
  saveState();
  closeModal('modalLimites');
  showToast('Limites salvos!');
  renderGastos();
}

// ════════════════════════════
// CATEGORIAS PERSONALIZADAS
// ════════════════════════════
function openCategoriasModal() {
  renderCustomCats();
}

function renderCustomCats() {
  state.customCats = state.customCats || [];
  const list = document.getElementById('categoriasCustomList');
  if(!list) return;
  if(!state.customCats.length) {
    list.innerHTML = '<div style="text-align:center;padding:16px 0;color:var(--gray-400);font-size:13px;">Nenhuma categoria personalizada ainda.</div>';
    return;
  }
  list.innerHTML = state.customCats.map((c,i) => `
    <div class="cat-custom-item">
      <div class="cat-custom-emoji">${c.emoji}</div>
      <div style="flex:1;font-size:13px;font-weight:600;color:var(--gray-900);">${c.nome}</div>
      <button onclick="removeCatCustom(${i})" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:16px;"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
    </div>`).join('');
}

function addCatCustom() {
  const emoji = document.getElementById('novaCatEmoji').value.trim() || '⭐';
  const nome  = document.getElementById('novaCatNome').value.trim();
  if(!nome) { showToast('Digite o nome da categoria!'); return; }
  state.customCats = state.customCats || [];
  const key = 'custom_' + Date.now();
  state.customCats.push({ key, emoji, nome });
  document.getElementById('novaCatEmoji').value = '';
  document.getElementById('novaCatNome').value  = '';
  saveState();
  renderCustomCats();
  updateCustomCatChips();
  showToast('Categoria criada!');
}

function removeCatCustom(i) {
  state.customCats.splice(i, 1);
  saveState();
  renderCustomCats();
  updateCustomCatChips();
}

function updateCustomCatChips() {
  // Chips de categoria foram substituídos pelo botão de filtro único
  updateCatFilterLabel();
}

// ════════════════════════════
// ENTRADAS SCREEN
// ════════════════════════════
let entradaPeriodoAtivo = 'mes';
let entradaPeriodoFiltro = { ini: null, fim: null };

function setEntradaPeriodo(tipo) {
  entradaPeriodoAtivo = tipo;
  ['dia','semana','mes','custom'].forEach(t => {
    const btn = document.getElementById('epc-'+t);
    if(btn) btn.classList.toggle('active', t===tipo);
    const p = document.getElementById('epanel-'+t);
    if(p) p.style.display = (t===tipo) ? (t==='mes'?'flex':'block') : 'none';
  });
  if(tipo==='mes') buildEntradaMesChips();
  if(tipo==='dia') { const today=new Date().toISOString().split('T')[0]; const el=document.getElementById('efiltro-dia'); if(el){el.value=today;} applyEntradaPeriodo(); }
  if(tipo==='semana') {
    const now=new Date(); const day=now.getDay();
    const ini=new Date(now); ini.setDate(now.getDate()-day+1);
    const fim=new Date(ini); fim.setDate(ini.getDate()+6);
    const ei=document.getElementById('efiltro-sem-ini'); if(ei) ei.value=ini.toISOString().split('T')[0];
    const ef=document.getElementById('efiltro-sem-fim'); if(ef) ef.value=fim.toISOString().split('T')[0];
    applyEntradaPeriodo();
  }
}

function buildEntradaMesChips() {
  const wrap = document.getElementById('emes-chips-wrap'); if(!wrap) return;
  const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const now=new Date(); let chips='';
  for(let i=-2;i<=3;i++){
    const d=new Date(now.getFullYear(),now.getMonth()+i,1);
    const label=months[d.getMonth()]+' de '+d.getFullYear();
    const val=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    chips+=`<button class="mes-chip ${i===0?'active':''}" onclick="selectEntradaMes(this,'${val}')">${label}</button>`;
  }
  wrap.innerHTML=chips;
  const now2=new Date();
  applyEntradaMes(now2.getFullYear()+'-'+String(now2.getMonth()+1).padStart(2,'0'));
}

function selectEntradaMes(btn,val){
  document.querySelectorAll('#emes-chips-wrap .mes-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active'); applyEntradaMes(val);
}
function applyEntradaMes(val){
  const [y,m]=val.split('-').map(Number);
  entradaPeriodoFiltro.ini=new Date(y,m-1,1);
  entradaPeriodoFiltro.fim=new Date(y,m,0,23,59,59);
  renderEntradas();
}
function applyEntradaPeriodo(){
  if(entradaPeriodoAtivo==='dia'){
    const v=document.getElementById('efiltro-dia')?.value; if(!v) return;
    const d=new Date(v+'T00:00:00');
    entradaPeriodoFiltro.ini=new Date(d); entradaPeriodoFiltro.ini.setHours(0,0,0,0);
    entradaPeriodoFiltro.fim=new Date(d); entradaPeriodoFiltro.fim.setHours(23,59,59,999);
  } else if(entradaPeriodoAtivo==='semana'){
    const vi=document.getElementById('efiltro-sem-ini')?.value;
    const vf=document.getElementById('efiltro-sem-fim')?.value;
    if(!vi||!vf) return;
    entradaPeriodoFiltro.ini=new Date(vi+'T00:00:00');
    entradaPeriodoFiltro.fim=new Date(vf+'T23:59:59');
  } else if(entradaPeriodoAtivo==='custom'){
    const vi=document.getElementById('efiltro-custom-ini')?.value;
    const vf=document.getElementById('efiltro-custom-fim')?.value;
    if(!vi||!vf) return;
    entradaPeriodoFiltro.ini=new Date(vi+'T00:00:00');
    entradaPeriodoFiltro.fim=new Date(vf+'T23:59:59');
  }
  renderEntradas();
}
function limparEntradaPeriodo(){
  entradaPeriodoFiltro={ini:null,fim:null};
  ['efiltro-custom-ini','efiltro-custom-fim'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderEntradas();
}

function getEntradasFiltradas(){
  const all=state.gastos.filter(g=>g.tipo==='pos');
  if(!entradaPeriodoFiltro.ini||!entradaPeriodoFiltro.fim) return all;
  return all.filter(g=>{
    if(!g.dataISO) return true;
    const d=new Date(g.dataISO);
    return d>=entradaPeriodoFiltro.ini&&d<=entradaPeriodoFiltro.fim;
  });
}

function renderEntradas(){
  const entradasEl=document.getElementById('entradasTotalVal'); 
  const confEl=document.getElementById('entradasConfirmadas');
  const pendEl=document.getElementById('entradasPendentes');
  if(!confEl) return;
  const all=getEntradasFiltradas();
  const total=all.reduce((a,g)=>a+g.valor,0);
  if(entradasEl) entradasEl.textContent=fmt(total);
  const confirmadas=all.filter(g=>g.status!=='pendente');
  const pendentes=all.filter(g=>g.status==='pendente');
  const renderGroup=(items,el)=>{
    if(!el) return;
    if(!items.length){el.innerHTML='<div class="empty-state" style="padding:14px 20px;"><p style="font-size:12px;">Nenhuma entrada aqui.</p></div>';return;}
    el.innerHTML=[...items].reverse().map(g=>`<div class="card"><div class="card-row">
      <div class="cat-icon ci-green"><svg class="ti ti-coin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /> <path d="M12 7v10" /></svg></div>
      <div class="card-info"><div class="card-name">${g.desc}</div><div class="card-sub">${g.data}${g.status==='pendente'?' · <span style="color:var(--amber);font-weight:600;">Pendente</span>':''}</div></div>
      <div>
        <div class="card-val val-pos">+ ${fmt(g.valor)}</div>
        <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:3px;">
          ${g.status==='pendente'?`<button onclick="confirmarEntrada('${g.id}')" style="background:var(--green-light);color:var(--green);border:none;border-radius:99px;padding:2px 8px;font-size:10px;font-weight:700;cursor:pointer;font-family:'Montserrat',sans-serif;">✓</button>`:''}
          <button onclick="deleteGasto('${g.id}')" style="background:none;border:none;color:var(--gray-400);cursor:pointer;font-size:15px;padding:0;"><svg class="ti ti-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /> <path d="M10 11l0 6" /> <path d="M14 11l0 6" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
        </div>
      </div>
    </div></div>`).join('');
  };
  renderGroup(confirmadas,confEl);
  renderGroup(pendentes,pendEl);
}

function confirmarEntrada(id){
  const g=state.gastos.find(x=>x.id===id);
  if(g){g.status='confirmado';saveState();renderEntradas();showToast('Entrada confirmada!');}
}

function abrirNovaEntrada(){
  selectType('pos');
  openModal('gasto');
}

function abrirNovaEntradaParcelada(){
  selectType('pos');
  openModal('gasto');
  showToast('Para entrada parcelada, use o chat ou adicione manualmente.');
}

// ════════════════════════════
// DASHBOARD SCREEN
// ════════════════════════════
let dashView='mes';
let dashPeriodoAtivo='mes';
let dashPeriodoFiltro={ini:null,fim:null};

function setDashView(v){
  dashView=v;
  const mb=document.getElementById('dash-toggle-mes');
  const tb=document.getElementById('dash-toggle-total');
  if(mb&&tb){
    const onStyle='flex:1;padding:10px;border-radius:12px;background:var(--grad);color:white;border:none;font-size:12px;font-weight:700;font-family:Montserrat,sans-serif;cursor:pointer;box-shadow:0 4px 12px var(--p-shadow);';
    const offStyle='flex:1;padding:10px;border-radius:12px;background:var(--glass);color:var(--p1);border:1.5px solid var(--p-border);font-size:12px;font-weight:700;font-family:Montserrat,sans-serif;cursor:pointer;backdrop-filter:blur(8px);';
    mb.style.cssText=v==='mes'?onStyle:offStyle;
    tb.style.cssText=v==='total'?onStyle:offStyle;
  }
  renderDashboard();
}

function setDashPeriodo(tipo){
  dashPeriodoAtivo=tipo;
  ['dia','semana','mes','custom'].forEach(t=>{
    const btn=document.getElementById('dpc-'+t); if(btn) btn.classList.toggle('active',t===tipo);
    const p=document.getElementById('dpanel-'+t); if(p) p.style.display=(t===tipo)?(t==='mes'?'flex':'block'):'none';
  });
  if(tipo==='mes') buildDashMesChips();
  if(tipo==='dia'){const today=new Date().toISOString().split('T')[0];const el=document.getElementById('dfiltro-dia');if(el)el.value=today;applyDashPeriodo();}
  if(tipo==='semana'){
    const now=new Date();const day=now.getDay();
    const ini=new Date(now);ini.setDate(now.getDate()-day+1);
    const fim=new Date(ini);fim.setDate(ini.getDate()+6);
    const ei=document.getElementById('dfiltro-sem-ini');if(ei)ei.value=ini.toISOString().split('T')[0];
    const ef=document.getElementById('dfiltro-sem-fim');if(ef)ef.value=fim.toISOString().split('T')[0];
    applyDashPeriodo();
  }
}

function buildDashMesChips(){
  const wrap=document.getElementById('dmes-chips-wrap');if(!wrap)return;
  const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const now=new Date();let chips='';
  for(let i=-2;i<=3;i++){
    const d=new Date(now.getFullYear(),now.getMonth()+i,1);
    const label=months[d.getMonth()]+' de '+d.getFullYear();
    const val=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    chips+=`<button class="mes-chip ${i===0?'active':''}" onclick="selectDashMes(this,'${val}')">${label}</button>`;
  }
  wrap.innerHTML=chips;
  const n=new Date();applyDashMes(n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0'));
}

function selectDashMes(btn,val){
  document.querySelectorAll('#dmes-chips-wrap .mes-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');applyDashMes(val);
}
function applyDashMes(val){
  const[y,m]=val.split('-').map(Number);
  dashPeriodoFiltro.ini=new Date(y,m-1,1);
  dashPeriodoFiltro.fim=new Date(y,m,0,23,59,59);
  renderDashboard();
}
function applyDashPeriodo(){
  if(dashPeriodoAtivo==='dia'){
    const v=document.getElementById('dfiltro-dia')?.value;if(!v)return;
    const d=new Date(v+'T00:00:00');
    dashPeriodoFiltro.ini=new Date(d);dashPeriodoFiltro.ini.setHours(0,0,0,0);
    dashPeriodoFiltro.fim=new Date(d);dashPeriodoFiltro.fim.setHours(23,59,59,999);
  }else if(dashPeriodoAtivo==='semana'){
    const vi=document.getElementById('dfiltro-sem-ini')?.value;
    const vf=document.getElementById('dfiltro-sem-fim')?.value;
    if(!vi||!vf)return;
    dashPeriodoFiltro.ini=new Date(vi+'T00:00:00');
    dashPeriodoFiltro.fim=new Date(vf+'T23:59:59');
  }else if(dashPeriodoAtivo==='custom'){
    const vi=document.getElementById('dfiltro-custom-ini')?.value;
    const vf=document.getElementById('dfiltro-custom-fim')?.value;
    if(!vi||!vf)return;
    dashPeriodoFiltro.ini=new Date(vi+'T00:00:00');
    dashPeriodoFiltro.fim=new Date(vf+'T23:59:59');
  }
  renderDashboard();
}
function limparDashPeriodo(){
  dashPeriodoFiltro={ini:null,fim:null};
  ['dfiltro-custom-ini','dfiltro-custom-fim'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderDashboard();
}

function filterByDashPeriodo(items){
  if(!dashPeriodoFiltro.ini||!dashPeriodoFiltro.fim) return items;
  return items.filter(g=>{
    if(!g.dataISO) return true;
    const d=new Date(g.dataISO);
    return d>=dashPeriodoFiltro.ini&&d<=dashPeriodoFiltro.fim;
  });
}

function renderDashboard(){
  const isTotal = dashView==='total';
  const labelEl=document.getElementById('dashSaldoLabel');
  const valEl=document.getElementById('dashSaldoVal');
  const statusEl=document.getElementById('dashSaldoStatus');
  if(!valEl) return;

  let gastosList, entradasList;
  if(isTotal){
    gastosList=state.gastos.filter(g=>g.tipo==='neg');
    entradasList=state.gastos.filter(g=>g.tipo==='pos');
    if(labelEl) labelEl.textContent='Saldo acumulado';
  } else {
    const allG=state.gastos.filter(g=>g.tipo==='neg');
    const allE=state.gastos.filter(g=>g.tipo==='pos');
    gastosList=filterByDashPeriodo(allG);
    entradasList=filterByDashPeriodo(allE);
    if(labelEl) labelEl.textContent='Saldo deste mês';
  }

  const totalGastos=gastosList.reduce((a,g)=>a+g.valor,0);
  const totalEntradas=entradasList.reduce((a,g)=>a+g.valor,0);
  const totalParcelas=state.parcelas.reduce((a,p)=>a+(p.valorParcela||p.total/p.qtd),0);
  const saldo=totalEntradas-totalGastos-totalParcelas;

  valEl.textContent = (saldo < 0 ? '-' : '') + fmt(Math.abs(saldo));
  valEl.style.color=saldo>=0?'var(--green)':'var(--red)';
  if(statusEl){
    statusEl.textContent=saldo>=0?'✓ Você está no positivo':'⚠ Você está no negativo';
    statusEl.style.color=saldo>=0?'var(--green)':'var(--red)';
  }
  const gEl=document.getElementById('dashGastosVal');if(gEl)gEl.textContent=fmt(totalGastos);
  const eEl=document.getElementById('dashEntradasVal');if(eEl)eEl.textContent=fmt(totalEntradas);
  const mEl=document.getElementById('dashMetasVal');if(mEl)mEl.textContent=state.metas.length;
  const pEl=document.getElementById('dashParcelasVal');if(pEl)pEl.textContent=fmt(totalParcelas);

  // Gráfico donut no dashboard
  const sec=document.getElementById('dashChartSection');
  if(sec) { renderChartInto(gastosList, sec); }
}

function renderChartInto(gastos, sec){
  if(!gastos.length){sec.innerHTML='';return;}
  const totals={};gastos.forEach(g=>{totals[g.cat]=(totals[g.cat]||0)+g.valor;});
  const sorted=Object.entries(totals).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const total=sorted.reduce((a,[,v])=>a+v,0);
  const p1=getComputedStyle(document.documentElement).getPropertyValue('--p1').trim()||'#7C3AED';
  function hexToRgb(h){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h.trim());return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:124,g:58,b:237};}
  function mixColor(base,white,t){return`rgb(${Math.round(base.r+(white.r-base.r)*t)},${Math.round(base.g+(white.g-base.g)*t)},${Math.round(base.b+(white.b-base.b)*t)})`;}
  const base=hexToRgb(p1);const white={r:255,g:255,b:255};
  const mixes=[0,0.18,0.34,0.48,0.6,0.72];
  const COLORS=mixes.map(t=>mixColor(base,white,t));
  const R=54,cx=64,cy=64,circumference=2*Math.PI*R;
  let offset=0;
  const segs=sorted.map(([cat,val],i)=>{
    const pct=val/total;const dash=pct*circumference;const gap=circumference-dash;
    const seg=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${COLORS[i]}" stroke-width="20" stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}" stroke-dashoffset="${(-offset*circumference+circumference/4).toFixed(2)}" stroke-linecap="butt"/>`;
    offset+=pct;return seg;
  });
  const legend=sorted.map(([cat,val],i)=>{
    const info=catInfo(cat);const pct=Math.round((val/total)*100);
    return`<div class="donut-legend-item"><div class="donut-legend-dot" style="background:${COLORS[i]};"></div><span class="donut-legend-label">${info.label}</span><span class="donut-legend-val">${fmt(val).replace('R$ ','R$')}</span><span class="donut-legend-pct">${pct}%</span></div>`;
  }).join('');
  sec.innerHTML=`<div class="chart-wrap"><div class="chart-title"><svg class="ti ti-chart-donut-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v5m4 4h5" /> <path d="M8.929 14.582l-3.429 2.918" /> <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg> Gastos por categoria</div><div class="donut-wrap"><div style="position:relative;flex-shrink:0;"><svg class="donut-svg" width="128" height="128" viewBox="0 0 128 128"><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--p-pale)" stroke-width="20"/>${segs.join('')}<circle cx="${cx}" cy="${cy}" r="34" fill="var(--glass)"/></svg><div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;"><div class="donut-total-val">${fmt(total).replace('R$ ','R$')}</div><div class="donut-total-label">total</div></div></div><div class="donut-legend">${legend}</div></div></div>`;
}

// ── NAV SCROLL ARROW ──
function scrollNav() {
  const scroll = document.getElementById('navScroll');
  if (!scroll) return;
  const maxScroll = scroll.scrollWidth - scroll.clientWidth;
  const atEnd = scroll.scrollLeft >= maxScroll - 10;
  scroll.scrollLeft = atEnd ? 0 : scroll.scrollLeft + 180;
  updateNavArrow();
}

function updateNavArrow() {
  const scroll = document.getElementById('navScroll');
  const arrow  = document.getElementById('navArrow');
  if (!scroll || !arrow) return;
  const maxScroll = scroll.scrollWidth - scroll.clientWidth;
  const atEnd = scroll.scrollLeft >= maxScroll - 10;
  // Rotate arrow when at end (pointing left to go back to start)
  const svg = arrow.querySelector('svg');
  if (svg) svg.setAttribute('class', atEnd ? 'ti ti-chevron-left' : 'ti ti-chevron-right');
}

// Scroll active nav button into view when switching screens
function scrollNavToActive() {
  const activeBtn = document.querySelector('.nav-btn.active');
  const scroll = document.getElementById('navScroll');
  if (activeBtn && scroll) {
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    const scrollWidth = scroll.clientWidth;
    scroll.scrollLeft = btnLeft - (scrollWidth / 2) + (btnWidth / 2);
    setTimeout(updateNavArrow, 150);
  }
}

// ── CENTRAL DE AJUDA ──
function toggleAjuda(id) {
  const body = document.getElementById('body-' + id);
  const arr  = document.getElementById('arr-'  + id);
  if (!body || !arr) return;
  const isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  arr.classList.toggle('open', !isOpen);
}

function abrirWhatsApp() {
  const msg = encodeURIComponent('Olá! Preciso de ajuda com o app Fina.');
  window.open('https://wa.me/5588993426933?text=' + msg, '_blank');
}
