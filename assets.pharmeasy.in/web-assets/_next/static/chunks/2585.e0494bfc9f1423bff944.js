(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2585],{17128:function(t,e,r){"use strict";r.r(e);var n=r(85893),o=r(26265),s=r(67294),i=r(14199),a=r(31070),d=r(11163),c=(r(62877),r(71424)),u=r(58743),p=r(20612),l=r(39333),f=r(90016),P=r(6702),h=r(96900),g=r(45060),v=r(75040),_=r(77383),m=r(68421),D=r(47871),b=r(15059),j=r(16812),x=r(71987),y=r(91418),k=r.n(y);function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=[p.productTierCodeMap.notForSale];function Z(t){var e,r,y,w=t.product,Z=t.productDistributedRating,T=t.productReviews,C=t.buttonProps,R=t.isValidProduct,I=t.shareProps,N=t.priceProps,V=t.showCartButton,W=t.setProductValidity,B=t.productRating,M=t.cartButtonDetails,E=t.timerOfferConfig,L=t.LCPImageLink,F=t.eddDetails,A=t.articles,H=t.fbtOtcPdpResponseData,U=t.pdpRecommendationResponseData,G=w.productTierAttributes,Y=w.productId,z=w.brandSlug,J=w.productSpecifications,K=w.name,q=w.damImages,Q=w.variantArrangements,X=void 0===Q?[]:Q,$=w.variants,tt=void 0===$?[]:$,et=w.expiryDate,rt=w.returnText,nt=w.consumerBrandId,ot=(0,u.Hb)(tt),st=(0,u.Kx)(tt,X),it=(0,i.Z)(tt)?{}:ot[Y],at=function(){return X.reduce((function(t,e){var r=e.variantType,n=it[r];return S(S({},t),{},(0,o.Z)({},r,n))}),{})},dt=(0,s.useState)(!1),ct=dt[0],ut=dt[1],pt=(0,s.useState)(!1),lt=pt[0],ft=pt[1],Pt=(0,s.useState)(at()),ht=Pt[0],gt=Pt[1],vt=(0,s.useRef)(),_t=(0,s.useRef)(),mt=(0,s.useRef)(),Dt=(0,d.useRouter)(),bt=(0,a.Z)((function(){if(null===mt||void 0===mt||!mt.current)return!1;var t=mt.current.getBoundingClientRect().top;t<-20&&!ct&&ut(!0),t>-20&&ct&&ut(!1)}),100),jt=function(){bt()};(0,s.useEffect)((function(){return window.addEventListener("scroll",jt),function(){window.removeEventListener("scroll",jt)}}),[ct]),(0,s.useEffect)((function(){ft(!1)}),[Y]),(0,s.useEffect)((function(){gt(at())}),[tt.length,Y]);var xt=(null===q||void 0===q?void 0:q.length)>0,yt=null!==(e=null===G||void 0===G?void 0:G.type)&&void 0!==e?e:p.productTierCodeMap.unknown,kt=yt===p.productTierCodeMap.notForSale,wt=z?(0,c.Z)(l.Z.otcBrandPage,{brandWithId:z}):"",St=(0,a.Z)((function(t){var e=ot[t],r=(0,c.Z)(l.Z.otcProduct,{slugWithId:null===e||void 0===e?void 0:e.slug});Dt.push(r)}),100);return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)(P.Mi,{className:k().fullWidthLHS,children:[(0,n.jsxs)("div",{className:k().pdpProductUnit,ref:mt,children:[xt?(0,n.jsxs)("div",{className:k().pdpImgGallery,children:[(0,n.jsx)(D.Z,{images:q,product:w,showShareIcon:!kt,shareProps:I,LCPImageLink:L}),(0,n.jsxs)("div",{className:k().returnText,children:[rt,(0,n.jsx)("a",{className:k().returnpolicy,href:"/legal/terms-and-conditions#returns",children:"Read More"})]})]}):null,(0,n.jsx)(x.Z,{eddDetails:F,product:w,brandUrl:wt,buttonProps:C,priceProps:N,fullWidth:!xt,showStickyInfo:ct,setProductValidity:W,isValidProduct:R,showCartButton:V,showShareOption:!kt&&!xt,shareProps:I,updatedProductDetails:M.updatedProductDetails,disableNotifyButton:M.disableNotifyButton,isNotForSale:kt,timerOfferConfig:E,ratings:B,distributedRatings:Z,reviews:T,referenceToRatingsContainer:vt,onVariantChange:function(t,e){var r={variantType:t,value:e,allVariantsMap:st,selectedVariants:ht,variantArrangements:X},n=(0,u.uA)(r),o=n.newSelectedVariants,s=n.newVariantId,i=Boolean(s);i&&s!==Y?(ft(!0),gt(o),St(s)):(gt(o),W(i)),(0,u.t8)(t,i,w)},selectedVariants:ht,pdpVariantData:it,loading:lt,isBottomSheetOpen:!1})]}),(null===U||void 0===U||null===(r=U.products)||void 0===r?void 0:r.length)>0&&(0,n.jsx)(b.Z,{productId:Y,type:"pdp",recommendations:U,src:"reco_otc_desktop"}),!O.includes(yt)&&(null===H||void 0===H||null===(y=H.products)||void 0===y?void 0:y.length)>0&&(0,n.jsx)(b.Z,{productId:Y,recommendations:H,FBTType:"otc",src:"fbt_otc_desktop"}),(0,n.jsx)("div",{ref:_t,children:(0,i.Z)(J)?null:(0,n.jsx)(j.Z,{brandUrl:wt,description:J,expiryDate:et,consumerBrandId:nt})}),(0,i.Z)(Z)?null:(0,n.jsx)("div",{className:k().borderTop,ref:vt,children:(0,n.jsx)(v.Z,{product:w,distributedRatings:Z})}),(0,i.Z)(T)?null:(0,n.jsx)(g.Z,{product:w,reviews:T}),(0,i.Z)(A)?null:(0,n.jsx)(f.Z,{articles:A,isMobile:!1,imageHeight:230,imageWidth:432,className:k().blogMargin})]}),(0,n.jsx)(P.Dz,{children:(0,n.jsxs)("div",{className:k().rhs,children:[(0,n.jsx)(m.Z,{productName:K,show:ct,priceProps:N,isValidProduct:R,buttonProps:C,showCartButton:V,classes:{container:k().infoContainer}}),(0,n.jsx)("div",{className:k().cartStatus,children:(0,n.jsx)(h.kZ,{className:k().cartStatusTite})}),(0,n.jsx)(_.Z,{revampedOffers:!0,classes:{contentWrapper:k().contentWrapper}})]})})]})}Z.defaultProps={eddDetails:{},buttonProps:{},isValidProduct:!1,shareProps:{show:!1,text:"",title:"",description:"",pageLink:""},timerOfferConfig:{},fbtOtcPdpResponseData:{},pdpRecommendationResponseData:{}},e.default=(0,s.memo)(Z)},91418:function(t){t.exports={fullWidthLHS:"PDPDesktop_fullWidthLHS__2YDFr",pdpProductUnit:"PDPDesktop_pdpProductUnit__3Ts9G",rhs:"PDPDesktop_rhs__1xSPq",borderTop:"PDPDesktop_borderTop__14dS7",contentWithMargin:"PDPDesktop_contentWithMargin__3YCbv",contentWrapper:"PDPDesktop_contentWrapper__fKJiV",infoContainer:"PDPDesktop_infoContainer__2stEi",pdpImgGallery:"PDPDesktop_pdpImgGallery__3Tc_T",cartStatusTite:"PDPDesktop_cartStatusTite__14kd9",cartStatus:"PDPDesktop_cartStatus__AdDQr",blogMargin:"PDPDesktop_blogMargin__2rJuY",returnText:"PDPDesktop_returnText__2yWzj",returnpolicy:"PDPDesktop_returnpolicy__1XVgn"}}}]);