"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2319],{1307:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(31545)),o=a(r(17329));t.default=(0,n.default)`
  mutation CreateMessage(
    $conversationId: String!
    $content: String!
    $userFullname: String!
    $userId: String!
    $userName: String!
    $customFields: [ChatMessageAttributeMutation]
    $channel: String!
    $organization: String!
    $integration: Boolean = false
  ) {
    createMessage(
      request: {
        conversationId: $conversationId
        channel: $channel
        organization: $organization
        message: {
          integration: $integration
          content: $content
          fromUser: { fullName: $userFullname, refKey: $userId, username: $userName }
          customFields: $customFields
        }
      }
    ) {
      ...chatMessage
      ...chatMessageError
    }
  }
  ${i.default}
  ${o.default}
`},2287:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query productPathQuery(
    $productId: String
    $partnerId: String
    $sellerId: String
    $zipcode: String
    $showUnavailable: Boolean = false
    $showPayment: Boolean = false
    $pmdPromoter: String
    $storeId: String
  ) {
    product(
      productRequest: {
        id: $productId
        partnerId: $partnerId
        sellerId: $sellerId
        showUnavailable: $showUnavailable
        showPayment: $showPayment
        zipcode: $zipcode
        metadata: { loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId } }
      }
    ) {
      path
    }
  }
`},2507:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation SetFollowStatus(
    $sellerId: String!
    $customerId: String!
    $followSeller: Boolean!
  ) {
    setFollowStatus(
      request: {
        sellerId: $sellerId
        customerId: $customerId
        followSeller: $followSeller
      }
    ) {
      ... on FollowerErrorResponse {
        message
        detail
      }
      ... on FollowerFollowingSellerResponse {
        customerId
        sellerId
        isFollowing
      }
    }
  }
`},2805:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query ProductRating(
    $variationId: String
    $filters: [Filter]
    $includeUserReviews: Boolean = false
    $page: Int = 1
    $pageSize: Int = 8
    $sortType: UserReviewsSortType = MORE_RELEVANT
    $hasTag: Boolean = true
  ) {
    productRating(variationId: $variationId, hasTag: $hasTag) {
      productId
      userReviews(
        userReviewRequest: {
          filters: $filters
          pagination: { page: $page, size: $pageSize }
          sortType: $sortType
        }
        hasTag: $hasTag
      ) @include(if: $includeUserReviews) {
        items {
          partner
          product {
            images
            productLink
            productName
            ratingValue
            sku
            videos
          }
          reviewId
          description
          rating
          title
          submissionDate
          userData {
            name
          }
          attributes {
            label
            value
          }
          dimensions {
            id
            label
          }
        }
        page {
          current
          totalItems
          totalPages
        }
      }
      dimensions {
        id
        label
        rating
      }
    }
  }
`},2887:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(31545));t.default=(0,n.default)`
  query ListMessages(
    $conversationId: String!
    $channel: String!
    $organization: String!
    $paginationLimit: Int!
    $paginationOffset: Int!
    $filters: ChatFiltersMessage
  ) {
    listMessages(
      request: {
        conversationId: $conversationId
        channel: $channel
        organization: $organization
        pagination: { limit: $paginationLimit, offset: $paginationOffset }
        filters: $filters
      }
    ) {
      ... on ChatErrorResponse {
        message
        slug
        __typename
      }
      ... on ChatMessagePaginationResponse {
        meta {
          links {
            next
            previous
          }
        }
        results {
          ...chatMessage
        }
      }
    }
  }
  ${i.default}
`},3051:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query topTermsQuery($termsSize: Int) {
    topTerms(topTermsRequest: { size: $termsSize }) {
      label
      terms
    }
  }`)},3247:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(52516));t.default=(0,n.default)`
  fragment productImportTaxes on ProductTax {
    freight {
      ...productImportTaxesValue
    }
    product {
      ...productImportTaxesValue
    }
    total {
      ...productImportTaxesValue
    }
  }
  ${i.default}
`},5298:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query seoDepartmentCategories($initialLetter: String, $page: Int, $pageSize: Int) {
    seoDepartmentCategories(
      initialLetter: $initialLetter
      page: $page
      pageSize: $pageSize
    ) {
      data {
        id
        h1
        categoryId
        subcategoryId
        meta {
          truePath
        }
      }
      totalCount
      page
      pageSize
      pageCount
    }
  }
`},6254:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(10056));t.default=(0,n.default)`
  query adsShowcaseQuery(
    $metadata: MetadataInput!
    $products: [AdsProductInput!]
    $zipcode: String
    $omitProductIds: [String!]
  ) {
    ads(
      input: {
        metadata: $metadata
        products: $products
        zipcode: $zipcode
        omitProductIds: $omitProductIds
      }
    ) {
      products {
        trackId
        campaignId
        slot
        product {
          ...product
        }
      }
    }
  }
  ${i.default}
`},6431:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query GetMpayOffers {
    getMpayOffers {
      cdc {
        approved
        totalLimit
        availableLimit
      }
    }
  }
`},6895:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment products on Product {
    id
    variationId
    title
    description
    image
    available
    position
    isBuyBox
    url
    path
    reference
    attributes {
      type
      label
      value
      current
      values
    }
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
    }
  }
`)},7140:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment seller on Seller {
    id
    sku
    description
    category
    deliveryId
    deliveryDescription
    restrictions
    details {
      id
      legalName
      documentNumber
      shippingDocumentNumber
      score
      sellerSince
      totalSales
      deliveryRate {
        message
        status
      }
      answerRate {
        message
        status
      }
      address {
        address
        number
        complement
        district
        city
        state
        country
        zipcode
      }
      regulatoryData {
        mapa {
          notApply
          items
        }
        anvisa {
          notApply
          items
        }
      }
    }
     tags {
      code
      discountType
      discountValue
      endDate
      message
      type
      version
      action {
        type
        url
      }
    }
    isChatEnabled
  }
`)},8426:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query GetLastProductFromConversation(
    $conversationId: String!
    $organization: String
    $channel: String
  ) {
    getLastProductFromConversation(
      request: {
        conversationId: $conversationId
        organization: $organization
        channel: $channel
      }
    ) {
      productId
    }
  }
`},8741:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query CustomerAddresses($customerAddressesId: ID!) {
    customerAddresses(id: $customerAddressesId) {
      id
      isDefault
      address
      city
      number
      state
      village
      zipCode
    }
  }
`},8885:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query IsCustomerFollowingSeller($sellerId: String!, $customerId: String!) {
    isCustomerFollowingSeller(request: { sellerId: $sellerId, customerId: $customerId }) {
      ... on FollowerErrorResponse {
        message
        detail
      }
      ... on FollowerFollowingSellerResponse {
        customerId
        sellerId
        isFollowing
      }
    }
  }
`},9300:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query homePageContent(
    $site: String
    $includeMeta: Boolean = false
    $includePopularDepartments: Boolean = false
    $includeHotlinks: Boolean = false
    $includeNewsletter: Boolean = false
    $includeLinkList: Boolean = false
  ) {
    homePageContent(storeId: $site) {
      storeId
      h1
      meta @include(if: $includeMeta) {
        ...meta_seoMeta
      }
      popularDepartments @include(if: $includePopularDepartments) {
        ...item_listHome
      }
      hotLinks @include(if: $includeHotlinks) {
        ...item_listHome
      }
      newsletter @include(if: $includeNewsletter) {
        ...newsletter
      }
      linkList @include(if: $includeLinkList) {
        ...linkList
      }
    }
  }
  ${i.SeoMetaFragment}
  ${i.HotLinksItemFragment}
  ${i.NewsletterFragment}
  ${i.BlogLinkListFragment}
`},9875:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
 fragment ads on Ads {
    sponsored
    id
    label
  }
`)},10056:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  fragment product on Product {
    id
    adsSellerId
    variationId
    title
    description
    image
    available
    url
    path
    reference
    offerTags
    restrictions
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
      currency
    }
    installment {
      paymentMethodDescription
      quantity
      amount
      totalAmount
    }
    rating {
      count
      score
    }
    badges {
      text
      imageUrl
      container
      position
      tooltip
    }
    seller {
      ...seller
    }
    brand {
      ...brand
    }
    category {
      ...productCategory
    }
    subcategory {
      ...subcategory
    }
    attributes {
      ...attributes
    }
  }
  ${i.ProductWithSellerFragment}
  ${i.ProductBrandFragment}
  ${i.ProductCategoryFragment}
  ${i.ProductSubCategoryFragment}
  ${i.ProductAttributesFragment}
`},10395:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment bundles on Bundle {
    id
    image
    price
    quantity
    reference
    title
    dimensions {
      ...dimensions
    }
    factsheet {
      ...factsheet
    }
  }
`)},10762:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query blogPostByEcommCategory(
    $categoryId: String = ""
    $subCategoryId: String = ""
    $blogPostQuantity: Int = 3
  ) {
    blogPostsByEcomm(
      ecommCategory: $categoryId
      ecommSubcategory: $subCategoryId
      quantity: $blogPostQuantity
    ) {
      posts {
        ...posts_postItem
      }
    }
  }
  ${i.BlogPostFragment}
`},11604:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment linkList on ComponentPresentationLinkList {
    href
    value
    alt
  }
`},11626:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation addProductReviewMutation(
    $characteristics: [ReviewCharacteristicInput]!
    $campaignId: String
    $productId: ID!
    $rating: Int!
    $recommended: Boolean!
    $text: String!
    $title: String!
    $userId: ID
    $userLocation: String
    $userName: String
    $reviewDataJWT: String
  ) {
    addProductReview(
      reviewRequest: {
        characteristics: $characteristics
        metadata: { campaignId: $campaignId }
        productId: $productId
        rating: $rating
        recommended: $recommended
        text: $text
        title: $title
        user: { id: $userId, name: $userName, location: $userLocation }
        reviewDataJWT: $reviewDataJWT
      }
    ) {
      id
      status
      payloadErrors {
        field
        message
      }
    }
  }
`},12911:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query blogHomeContent($recommendationsLimit: Int = 3, $postsLimit: Int = 3) {
    blogHomeContent(
      recommendationsLimit: $recommendationsLimit
      recommendationPostsLimit: $postsLimit
    ) {
      recommendations {
        ...recommendations_blogRecommendations
      }
    }
  }
  ${i.BlogRecommendationsFragment}
`},13246:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment rating_itemRating on Rating {
    count
    score
  }
`)},13521:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TradeInQuery=t.TopTermsQuery=t.SuggestionsQuery=t.ShowcaseQuery=t.ShowcaseItemsQuery=t.ShippingHookQuery=t.SeoSearchQuery=t.SeoRelatedLinkQuery=t.SeoPdpContentQuery=t.SearchItemQuery=t.SeoDepartmentSubCategoriesQuery=t.SeoDepartmentQuery=t.SeoDepartmentCategoriesQuery=t.SellerPageQuery=t.SearchQuery=t.ReviewSummaryQuery=t.ReviewQuery=t.RetrieveProductKeySellingPointsQuery=t.QuestionsQuery=t.PromoterShowcaseQuery=t.ProductRatingQuery=t.ProductQuery=t.ProductPathQuery=t.MpayOffersQuery=t.LocationQuery=t.LastProductQuery=t.ItemQuery=t.IsCustomerFollowingSeller=t.ImportTaxQuery=t.HomePageContentQuery=t.EligibleProductServicesQuery=t.ChatNotificationsQuery=t.ChatNotificationsCheckerQuery=t.ChatMessagesQuery=t.ChatConversationsQuery=t.CategoryQuery=t.CategoryDimensionsQuery=t.CartQuery=t.BreadcrumbQuery=t.BlogPostsListingQuery=t.BlogPostsByEcommQuery=t.BlogHomeContentQuery=t.BrandsQuery=t.AllCategoriesQuery=t.AllBrandsQuery=t.AdsShowcaseQuery=t.AdsQuery=t.AdsItemsQuery=t.AdsBrandsQuery=t.AbTestingQuery=void 0,t.EcommHeaderQuery=t.ReelsQuery=t.SeoRelevantLinksQuery=t.PreBasketQuery=t.BasketQuery=t.WishlistQuery=t.VideoQuery=t.VehiclePlateQuery=t.VehiclePartCompatibilityBySkuQuery=t.VehiclePartCompatibilityQuery=t.VehicleCardanFilterQuery=t.UnreadCountCustomerMessageQuery=t.TrendsQuery=void 0;var n=r(36640);Object.defineProperty(t,"AbTestingQuery",{enumerable:!0,get:function(){return a(n).default}});var i=r(90175);Object.defineProperty(t,"AdsBrandsQuery",{enumerable:!0,get:function(){return a(i).default}});var o=r(15551);Object.defineProperty(t,"AdsItemsQuery",{enumerable:!0,get:function(){return a(o).default}});var u=r(60941);Object.defineProperty(t,"AdsQuery",{enumerable:!0,get:function(){return a(u).default}});var l=r(6254);Object.defineProperty(t,"AdsShowcaseQuery",{enumerable:!0,get:function(){return a(l).default}});var s=r(60920);Object.defineProperty(t,"AllBrandsQuery",{enumerable:!0,get:function(){return a(s).default}});var d=r(62886);Object.defineProperty(t,"AllCategoriesQuery",{enumerable:!0,get:function(){return a(d).default}});var c=r(21787);Object.defineProperty(t,"BrandsQuery",{enumerable:!0,get:function(){return a(c).default}});var f=r(12911);Object.defineProperty(t,"BlogHomeContentQuery",{enumerable:!0,get:function(){return a(f).default}});var m=r(10762);Object.defineProperty(t,"BlogPostsByEcommQuery",{enumerable:!0,get:function(){return a(m).default}});var p=r(92898);Object.defineProperty(t,"BlogPostsListingQuery",{enumerable:!0,get:function(){return a(p).default}});var g=r(91558);Object.defineProperty(t,"BreadcrumbQuery",{enumerable:!0,get:function(){return a(g).default}});var y=r(23691);Object.defineProperty(t,"CartQuery",{enumerable:!0,get:function(){return a(y).default}});var _=r(42662);Object.defineProperty(t,"CategoryDimensionsQuery",{enumerable:!0,get:function(){return a(_).default}});var b=r(20442);Object.defineProperty(t,"CategoryQuery",{enumerable:!0,get:function(){return a(b).default}});var v=r(64953);Object.defineProperty(t,"ChatConversationsQuery",{enumerable:!0,get:function(){return a(v).default}});var h=r(2887);Object.defineProperty(t,"ChatMessagesQuery",{enumerable:!0,get:function(){return a(h).default}});var $=r(77206);Object.defineProperty(t,"ChatNotificationsCheckerQuery",{enumerable:!0,get:function(){return a($).default}});var P=r(56377);Object.defineProperty(t,"ChatNotificationsQuery",{enumerable:!0,get:function(){return a(P).default}});var I=r(70295);Object.defineProperty(t,"EligibleProductServicesQuery",{enumerable:!0,get:function(){return a(I).default}});var S=r(9300);Object.defineProperty(t,"HomePageContentQuery",{enumerable:!0,get:function(){return a(S).default}});var M=r(64621);Object.defineProperty(t,"ImportTaxQuery",{enumerable:!0,get:function(){return a(M).default}});var O=r(8885);Object.defineProperty(t,"IsCustomerFollowingSeller",{enumerable:!0,get:function(){return a(O).default}});var j=r(72464);Object.defineProperty(t,"ItemQuery",{enumerable:!0,get:function(){return a(j).default}});var C=r(8426);Object.defineProperty(t,"LastProductQuery",{enumerable:!0,get:function(){return a(C).default}});var D=r(68304);Object.defineProperty(t,"LocationQuery",{enumerable:!0,get:function(){return a(D).default}});var F=r(6431);Object.defineProperty(t,"MpayOffersQuery",{enumerable:!0,get:function(){return a(F).default}});var Q=r(2287);Object.defineProperty(t,"ProductPathQuery",{enumerable:!0,get:function(){return a(Q).default}});var q=r(38886);Object.defineProperty(t,"ProductQuery",{enumerable:!0,get:function(){return a(q).default}});var w=r(2805);Object.defineProperty(t,"ProductRatingQuery",{enumerable:!0,get:function(){return a(w).default}});var R=r(82532);Object.defineProperty(t,"PromoterShowcaseQuery",{enumerable:!0,get:function(){return a(R).default}});var k=r(42756);Object.defineProperty(t,"QuestionsQuery",{enumerable:!0,get:function(){return a(k).default}});var B=r(93640);Object.defineProperty(t,"RetrieveProductKeySellingPointsQuery",{enumerable:!0,get:function(){return a(B).default}});var T=r(54429);Object.defineProperty(t,"ReviewQuery",{enumerable:!0,get:function(){return a(T).default}});var A=r(23803);Object.defineProperty(t,"ReviewSummaryQuery",{enumerable:!0,get:function(){return a(A).default}});var z=r(77013);Object.defineProperty(t,"SearchQuery",{enumerable:!0,get:function(){return a(z).default}});var L=r(25569);Object.defineProperty(t,"SellerPageQuery",{enumerable:!0,get:function(){return a(L).default}});var x=r(5298);Object.defineProperty(t,"SeoDepartmentCategoriesQuery",{enumerable:!0,get:function(){return a(x).default}});var W=r(58134);Object.defineProperty(t,"SeoDepartmentQuery",{enumerable:!0,get:function(){return a(W).default}});var N=r(78152);Object.defineProperty(t,"SeoDepartmentSubCategoriesQuery",{enumerable:!0,get:function(){return a(N).default}});var U=r(61956);Object.defineProperty(t,"SearchItemQuery",{enumerable:!0,get:function(){return a(U).default}});var E=r(61016);Object.defineProperty(t,"SeoPdpContentQuery",{enumerable:!0,get:function(){return a(E).default}});var V=r(29849);Object.defineProperty(t,"SeoRelatedLinkQuery",{enumerable:!0,get:function(){return a(V).default}});var H=r(76136);Object.defineProperty(t,"SeoSearchQuery",{enumerable:!0,get:function(){return a(H).default}});var K=r(26054);Object.defineProperty(t,"ShippingHookQuery",{enumerable:!0,get:function(){return a(K).default}});var G=r(21198);Object.defineProperty(t,"ShowcaseItemsQuery",{enumerable:!0,get:function(){return a(G).default}});var J=r(46210);Object.defineProperty(t,"ShowcaseQuery",{enumerable:!0,get:function(){return a(J).default}});var Y=r(40332);Object.defineProperty(t,"SuggestionsQuery",{enumerable:!0,get:function(){return a(Y).default}});var X=r(3051);Object.defineProperty(t,"TopTermsQuery",{enumerable:!0,get:function(){return a(X).default}});var Z=r(28524);Object.defineProperty(t,"TradeInQuery",{enumerable:!0,get:function(){return a(Z).default}});var ee=r(33189);Object.defineProperty(t,"TrendsQuery",{enumerable:!0,get:function(){return a(ee).default}});var et=r(44030);Object.defineProperty(t,"UnreadCountCustomerMessageQuery",{enumerable:!0,get:function(){return a(et).default}});var er=r(31542);Object.defineProperty(t,"VehicleCardanFilterQuery",{enumerable:!0,get:function(){return a(er).default}});var ea=r(34308);Object.defineProperty(t,"VehiclePartCompatibilityQuery",{enumerable:!0,get:function(){return a(ea).default}});var en=r(65950);Object.defineProperty(t,"VehiclePartCompatibilityBySkuQuery",{enumerable:!0,get:function(){return a(en).default}});var ei=r(26821);Object.defineProperty(t,"VehiclePlateQuery",{enumerable:!0,get:function(){return a(ei).default}});var eo=r(26662);Object.defineProperty(t,"VideoQuery",{enumerable:!0,get:function(){return a(eo).default}});var eu=r(35204);Object.defineProperty(t,"WishlistQuery",{enumerable:!0,get:function(){return a(eu).default}});var el=r(85287);Object.defineProperty(t,"BasketQuery",{enumerable:!0,get:function(){return a(el).default}});var es=r(39254);Object.defineProperty(t,"PreBasketQuery",{enumerable:!0,get:function(){return a(es).default}});var ed=r(36526);Object.defineProperty(t,"SeoRelevantLinksQuery",{enumerable:!0,get:function(){return a(ed).default}});var ec=r(39064);Object.defineProperty(t,"ReelsQuery",{enumerable:!0,get:function(){return a(ec).default}});var ef=r(78937);Object.defineProperty(t,"EcommHeaderQuery",{enumerable:!0,get:function(){return a(ef).default}})},14042:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
    fragment paymentMethods on PaymentMethods {
        id
        installmentPlans {
            installment
            installmentAmount
            interest
            interestAmount
            totalAmount
            discount
        }
    }
`)},15551:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(92672));t.default=(0,n.default)`
  query adsItemsQuery(
    $metadata: MetadataInput!
    $banners: [AdsBannerInput!]
    $products: [AdsProductInput!]
    $zipcode: String
    $omitProductIds: [String!]
    $offerOptions: OfferOptionsInput
  ) {
    ads(
      input: {
        metadata: $metadata
        banners: $banners
        products: $products
        zipcode: $zipcode
        omitProductIds: $omitProductIds
      }
    ) {
      banners {
        campaignId
        redirectUrl
        imageUrl
        trackId
        slot
      }
      items {
        trackId
        campaignId
        slot
        item {
          ...item
        }
      }
      fillrates {
        eventId
        placement
        received {
          serverAdsAmount
        }
        requested {
          categories
          serverAdsAmount
          skus
        }
        slotId
      }
    }
  }
  ${i.default}
`},16909:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation UpdatePreBasketItem($itemId: String!, $body: UpdateListItemInput!) {
    updateListItem(navigationId: $itemId, type: pre_basket, body: $body) {
      message
      status
      payload {
        id
      }
    }
  }
`},17329:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment chatMessageError on ChatErrorResponse {
    message
    slug
    stack
    detail {
      loc
      msg
    }
  }
`},17526:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation RemoveItems($input: [RemoveItemInput!]!, $basketId: ID!) {
    removeItems(input: $input, basketId: $basketId)
  }
`},18773:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment variations on Variation {
    id
    label
    type
    value
    image
    available
    path
  }
`)},19195:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment reviewsByRating on ReviewsByRating {
    rating
    total
  }
`)},20442:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(62280));t.default=(0,n.default)`
  query categoryQuery(
    $categoryId: String
    $subCategoryId: String = ""
    $storeId: String
  ) {
    category(
      categoryRequest: {
        category: $categoryId
        subcategory: $subCategoryId
        metadata: { loyaltyParams: { storeId: $storeId } }
      }
    ) {
      ...category
      subcategories {
        ...category
        subcategories {
          ...category
          subcategories {
            ...category
            subcategories {
              ...category
            }
          }
        }
      }
    }
  }
  ${i.default}
`},21058:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment items on Question {
    id
    question
    questionCreatedAt
    answer
    answerCreatedAt
  }
`)},21198:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(92672)),o=a(r(68237));t.default=(0,n.default)`
  query showcaseItemsQuery(
    $showcaseId: String
    $customerId: String
    $placeId: String
    $pageId: String
    $partnerId: String
    $pmdPromoter: String
    $storeId: String
    $productId: String
    $filters: [FilterInput]
    $includePagination: Boolean = true
    $zipcode: String
    $offerOptions: OfferOptionsInput
  ) {
    recommendation(
      recommendationRequest: {
        customerId: $customerId
        pageId: $pageId
        placeId: $placeId
        productId: $productId
        metadata: {
          partnerId: $partnerId
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
        }
        filters: $filters
        searchRequest: { location: { zipCode: $zipcode } }
      }
    ) {
      dynamic(showcaseId: $showcaseId) {
        id
        title
        type
        designTokenId
        items {
          ...item
        }
        button {
          label
        }
        pagination {
          ...showcasePagination @include(if: $includePagination)
        }
      }
    }
  }
  ${i.default}
  ${o.default}
`},21787:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query brandsQuery($letter: String! = "a", $limit: Int = 100, $offset: Int = 0) {
    brands(letter: $letter, limit: $limit, offset: $offset) {
      meta {
        page {
          count
          limit
          offset
        }
      }
      results {
        letter
        name
        slug
      }
    }
  }
`},22523:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(36313));t.default=(0,n.default)`
  fragment newsletter on Newsletter {
    origin
    invalidEmail
    invalidName
    default {
      ...sharedItems
    }
    success {
      ...sharedItems
    }
    error {
      ...sharedItems
    }
  }
  ${i.default}
`},23691:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query cartQuery($cartId: String = "") {
    cart(cartRequest: { id: $cartId }) {
      totals {
        itemsQuantity
      }
    }
  }
`},23803:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
    query reviewSummary(
      $productId: String! = ""
    ) {
      reviewSummary(productId: $productId) {
        productId
        summary
        tags
      }
    }
  `)},25306:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment rating on Rating {
    count
    score
  }
`)},25465:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment media_itemMedia on ItemMedia {
    audios
    images
    podcasts
    videos
  }
`)},25569:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
    query SellerPage(
        $sellerPageId: String!
    ) {
        sellerPage(id: $sellerPageId) {
            logoUrl
            style {
                backgroundColor
                colorPrimary
                colorSecondary
            }
            header {
                coverImage {
                    desktop
                    mobile
                }
            }
            primaryBanner {
                category {
                    id
                    title
                    label
                    description
                }
                subCategory {
                    id
                    title
                    label
                    description
                }
                brand {
                    label
                    slug
                }
                images {
                    desktop
                    mobile
                }
                title
                search {
                    filters {
                        type
                        value
                        description
                    }
                    sort {
                        type
                        orientation
                        description
                    }
                }
            }
            secondaryBanner {
                category {
                    id
                    title
                    label
                    description
                }
                subCategory {
                    id
                    title
                    label
                    description
                }
                brand {
                    label
                    slug
                }
                images {
                    desktop
                    mobile
                }
                title
                search {
                    filters {
                        type
                        value
                        description
                    }
                    sort {
                        type
                        orientation
                        description
                    }
                }
            }
            productSlide {
                type
                title
                settings {
                    category {
                        id
                        title
                        label
                        description
                    }
                    subCategory {
                        id
                        title
                        label
                        description
                    }
                    brand {
                        label
                        slug
                    }
                    search {
                        filters {
                            type
                            value
                            description
                        }
                        sort {
                            type
                            orientation
                            description
                        }
                    }
                }
            }
            productGrid {
                type
                title
                settings {
                    category {
                        id
                        title
                        label
                        description
                    }
                    subCategory {
                        id
                        title
                        label
                        description
                    }
                    brand {
                        label
                        slug
                    }
                    search {
                        filters {
                            type
                            value
                            description
                        }
                        sort {
                            type
                            orientation
                            description
                        }
                    }
                }
            }
            name
            legalName
            stats {
              score
              deliveryRate {
                  message
                  status
              }
              answerRate {
                message
                status
            }
            totalSales
            totalFollowers
            }
            isChatEnabled
            isOfficialStore
            sellerSince
            documentNumber
            description
            address {
              address
              city
              complement
              country
              district
              number
              state
              zipcode
            }
            regulatoryData {
              mapa {
                notApply
                items
              }
              anvisa {
                notApply
                items
              }
            }
            videos {
                uuid
                title
                products {
                    sku
                    sellerId
                    navigationId
                }
                medias {
                    url
                    urlPreview
                    type
                    thumbnail
                }
            }
            hotlinks {
                title
                banners {
                    category {
                        id
                        title
                        label
                        description
                    }
                    subCategory {
                        id
                        title
                        label
                        description
                    }
                    brand {
                        label
                        slug
                    }
                    images {
                        desktop
                        mobile
                    }
                    title
                    search {
                        filters {
                            type
                            value
                            description
                        }
                        sort {
                            type
                            orientation
                            description
                        }
                    }
                }
            }
        }
    }
`)},26054:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment estimateError on EstimateErrorResponse {
    error
    status
    message
    uuid
  }

  fragment shippings on ShippingResponse {
    status
    shippings {
      id
      packages {
        deliveryTypes {
          id
          description
          type
          time
          price
        }
      }
    }
  }

  fragment estimate on EstimateResponse {
    disclaimers {
      sequence
      message
    }
    deliveries {
      closenessGroup {
        id
      }
      id
      status {
        code
      }
      modalities {
        id
        type
        name
        shippingTime {
          unit
          value {
            min
            max
          }
          description
          disclaimers {
            sequence
            message
          }
          expectedDeliveryDate {
            max
            min
          }
        }
        cost {
          customer
        }
        prices {
          customer
          operation
          currency
          exchangeRate
        }
      }
    }
    closenessGroups {
      customerCost
      disclaimer
      id
      items {
        seller {
          id
          sku
        }
      }
      name
      operationCost
      slug
      shortPolicy
      target
      targetRemaining
    }
    status
  }

  query shippingQuery($shippingRequest: ShippingRequest!) {
    shipping(shippingRequest: $shippingRequest) {
      status
      ...shippings
      ...estimate
      ...estimateError
    }
  }
`},26662:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(35410));t.default=(0,n.default)`
  query videoQuery($uuid: String!, $zipcode: String) {
    videoDetail(uuid: $uuid) {
      creator {
        type
        name
        avatar
        showcase_id
      }
      medias {
        url
        quality
        thumbnail
        uuid
      }
      products {
        id
        image
        path
        title
        available
        attributes {
          ...attributes_itemAttributes
        }
        brand {
          label
        }
        shippingTag(shippingTagRequest: { location: { zipCode: $zipcode } }) {
          cost
        }
        minimumOrderQuantity
        offers {
          listPrice
          price
          bestPrice {
            totalAmount
            paymentMethodDescription
          }
          bestInstallmentPlan {
            totalAmount
            installmentAmount
            paymentMethodDescription
            installment
          }
          seller {
            id
            tags {
              message
              type
              backgroundColor
              textColor
              icon
              layout
              iconProperties {
                width
                height
                position
              }
              version
              code
              action {
                type
                url
              }
              discountType
              discountValue
              startDate
              endDate
            }
          }
        }
        category {
          id
          subcategories {
            id
          }
        }
      }
      thumbnail
      title
      url
      uuid
    }
  }
  ${i.default}
`},26707:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment item_listHome on ListHome {
    items {
      id
      image {
        src
        alt
      }
      link {
        text
        href
      }
    }
  }
`},26821:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query VehiclePlate($plate: String = "") {
    plateVehicle(plate: $plate) {
      brandName
      modelName
      year
      versionName
      plate
    }
  }
`},28524:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment TradeInQuotation on FindTradeInQuotationResponse {
    id
    title
    subtext
    promotionText
  }

  fragment TradeInQuotationError on TradeInErrorResponse {
    message
    detail
    error
  }

  query TradeInQuotationQuery($request: TradeInFindQuotationsRequest!) {
    findTradeInQuotation(request: $request) {
      ...TradeInQuotation
      ...TradeInQuotationError
    }
  }
`},29292:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation addToWishlist(
    $variationId: String!
    $name: String
    $price: Float
    $userId: String!
  ) {
    addToWishlist(
      wishlistRequest: {
        userId: $userId
        product: { id: $variationId, name: $name, price: $price }
      }
    ) {
      status
      item {
        id
        name
        price
        createdAt
      }
    }
  }
`},29691:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
 fragment filters on FilterResponse {
    type
    slug
    label
    min
    max
    selectedMin
    selectedMax
    values {
      id
      slug
      label
      count
      selected
      type
      values {
        id
        slug
        label
        count
        selected
        parent {
          id
          slug
          label
          count
        }
        values {
          id
          slug
          label
          count
          selected
          type
        }
      }
    }
  }
`)},29849:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query seoRelatedLink($pagePath: String!) {
    seoRelatedLink(path: $pagePath) {
      label
      href
    }
  }
`},30251:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment loyalty on Loyalty {
    value
    type
    attributes {
      color
      icon
    }
    label
    description
  }
`)},31542:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query VehicleCardanFilter(
    $brand: String = ""
    $model: String = ""
    $year: Int = 0
    $includeModel: Boolean! = false
    $includeVersion: Boolean! = false
    $includeYear: Boolean! = false
  ) {
    vehicleBrands {
      name
      urlLogo
    }
    vehicleModels(brand: $brand) @include(if: $includeModel) {
      name
    }
    vehicleYears(brand: $brand, model: $model) @include(if: $includeYear) {
      year
    }
    vehicleVersions(brand: $brand, model: $model, year: $year)
      @include(if: $includeVersion) {
      id
      name
    }
  }
`},31545:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment chatMessage on ChatMessage {
    id
    fromUser {
      id
      fullName
      refKey
      type
    }
    toUser {
      id
      fullName
      refKey
      type
    }
    content
    readBy
    moderation {
      status
      whenAt
    }
    customFields {
      name
      value
    }
    whenAt
  }
`},33189:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`query trendsQuery(
  $recentSearches: [String!]
  $limit: Int = 6
) {
  trends(trendsRequest: {
    recentSearches: $recentSearches,
    total: $limit
  }){
    userHistory
    topTerms
  }
}
`)},33470:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment badges on Badge {
    text
    imageUrl
    container
    position
    tooltip
  }
`)},34308:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query VehiclePartCompatibility(
    $brand: String = ""
    $model: String = ""
    $version: String = ""
    $year: Int = 0
    $partNumber: String = ""
  ) {
    compatibility(
      brand: $brand
      model: $model
      year: $year
      version: $version
      codigoPeca: $partNumber
    ) {
      compatible
    }
  }
`},35093:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation CreateConversation($request: ChatCreateConversationRequest!) {
    createConversation(request: $request) {
      ... on ChatConversationResponse {
        id
        unreadFromCount
        toUser {
          refKey
          fullName
        }
        lastInteractionAt
      }
    }
  }
`},35204:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query wishlistQuery($userId: String = "") {
    wishlist(wishlistRequest: { userId: $userId }) {
      id
      count
      items {
        id
      }
    }
  }
`},35410:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment attributes_itemAttributes on ItemAttribute {
    current
    label
    type
    values {
      available
      image
      path
      value
      variationId
    }
  }
`)},36313:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment sharedItems on ComponentSharedItem {
    title
    description
    image {
      src
      alt
      width
      height
    }
    link {
      text
      href
    }
  }
`},36526:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query relevantLinksQuery(
    $relevantLinksPageTypes: [String!]
    $relevantLinksLinkGroup: [String!]
    $relevantLinksPage: Int = 1
    $relevantLinksPageSize: Int = 10
  ) {
    relevantLinks(
      pageTypes: $relevantLinksPageTypes
      linkGroup: $relevantLinksLinkGroup
      pagination: { page: $relevantLinksPage, pageSize: $relevantLinksPageSize }
    ) {
      items {
        id
        label
        href
        title
        targetBlank
        pageTypes {
          id
          pageName
        }
        linkGroup
      }
      page
      totalPages
      totalRecords
      pageSize
    }
  }
`},36640:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query abTestingQuery(
    $metadata: MetadataInput!
    $requestData: RequestDataInput!
    $experimentByPass: Boolean = false
  ) {
    abTesting(
      abTestRequest: {
        metadata: $metadata
        requestData: $requestData
        experiment: { bypass: $experimentByPass }
      }
    ) {
      id
      name
      channel
      variantId
      variantName
      experimentName
      endDate
    }
  }
`},38886:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query productQuery(
    $productId: String
    $partnerId: String
    $sellerId: String
    $zipcode: String
    $termsSize: Int = 20
    $includeTerms: Boolean = false
    $includeDescription: Boolean = false
    $showUnavailable: Boolean = false
    $showPayment: Boolean = false
    $pmdPromoter: String
    $storeId: String
    $channelCode: String
    $customerId: String
    $isLoyalty: Boolean
  ) {
    product(
      productRequest: {
        id: $productId
        partnerId: $partnerId
        sellerId: $sellerId
        showDescription: $includeDescription
        showUnavailable: $showUnavailable
        showPayment: $showPayment
        zipcode: $zipcode
        metadata: {
          customerId: $customerId
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
          channelCode: $channelCode
          isLoyalty: $isLoyalty
        }
      }
    ) {
      isBuyBox
      id
      available
      title
      reference
      image
      terms(termsSize: $termsSize) @include(if: $includeTerms)
      description @include(if: $includeDescription)
      isOnWishlist
      type
      variationId
      path
      offerTags
      url
      minimumOrderQuantity
    }
  }
`},39064:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query Reels($customerId: String!, $videoUuid: String) {
    reels(customer_id: $customerId, video_uuid: $videoUuid) {
      uuid
      url
      thumbnail
      title
      creator {
        name
        type
      }
      products {
        path
        id
        title
        image
        offers {
          price
          bestPrice {
            totalAmount
          }
          bestInstallmentPlan {
            installment
            installmentAmount
          }
        }
      }
      medias {
        quality
        url
      }
    }
  }
`},39254:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query PreBasketQuery {
    itemList(type: pre_basket) {
      id
      items {
        name
        id
        quantity
        extras
        item {
          id
          financialServices {
            offers {
              description
              id
            }
          }
          offers {
            seller {
              sku
            }
            financialServices {
              description
              id
              offers {
                description
                id
              }
            }
          }
        }
      }
    }
  }
`},39498:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment meta_metaCategory on MetaCategory {
    canonical
    breadcrumbAlias
    description
    seoBlock
  }
`)},39643:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment faq on ComponentPresentationFaq {
    answer: Answer
    question: Question
  }
`},40332:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`query suggestQuery(
  $query: String!
  $termsSize: Int
  $productsSize: Int = 0
  $categoriesSize: Int
  $brandsSize: Int
  $partnerId: String
  $skipProducts: Boolean = false
) {
  suggest(
    suggestRequest: {
      query: $query
      termsSize: $termsSize
      productsSize: $productsSize
      categoriesSize: $categoriesSize
      brandsSize: $brandsSize
      metadata: { partnerId: $partnerId }
    }
  ) {
    terms {
      term
      count
    }
    products @skip(if: $skipProducts) {
      id
      variationId
      title
      price {
        realPrice: price
      }
      path
      image
    }
  }
}
`)},41104:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment offers_itemOffers on ItemOffer {
    variationId
    price
    listPrice
    currency
    exchangeRate
    idExchangeRate
    originalPriceForeign
    bestPrice {
      discount
      paymentMethodDescription
      paymentMethodId
      totalAmount
    }
    bestInstallmentPlan {
      discount
      installment
      installmentAmount
      interestAmount
      paymentMethodDescription
      paymentMethodId
      totalAmount
    }
    paymentMethods {
      id
      installmentPlans {
        discount
        installment
        installmentAmount
        interestAmount
        totalAmount
      }
    }
    restrictions {
      maxCheckoutQuantity
      timerStartDate
      timerEndDate
    }
    seller {
      address {
        address
        city
        complement
        country
        district
        number
        state
        zipcode
      }
      tagRanking
      available
      deliveryDescription
      deliveryId
      description
      documentNumber
      id
      isActive
      isChatEnabled
      isIpdv
      isQuestionsAndAnswersEnabled
      legalName
      name
      regulatoryData {
        anvisa {
          items
          notApply
        }
        mapa {
          items
          notApply
        }
      }
      sellerSince
      sellsToCompany
      shippingDocumentNumber
      sku
      stats {
        answerRate {
          message
          status
        }
        deliveryRate {
          message
          status
        }
        score
        totalSales
      }
      tags {
        action {
          type
          url
        }
        backgroundColor
        code
        discountType
        discountValue
        endDate
        icon
        iconProperties {
          width
          height
          position
        }
        layout
        message
        startDate
        textColor
        type
        version
      }
    }
    badges {
      container
      imageUrl
      position
      slug
      text
      tooltip
    }
    promotions {
      id
      description
      benefit
      subBenefit
      benefitType
      benefitValue
      benefitPrice
      benefitBestPrice
    }
    financialServices {
      id
      description
      offers {
        campaignId
        description
        id
        price
        treeId
        wageCompensation {
          amount
          percentage
        }
      }
    }
  }
`)},42662:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query CategoryDimensionsQuery(
    $categoryId: String!
    $subCategoryId: String!
    $hasTag: Boolean = true
  ) {
    categoryDimensions(
      categoryDimensionsRequest: {
        category: $categoryId
        subcategory: $subCategoryId
        hasTag: $hasTag
      }
    ) {
      category
      subcategory
      dimensions {
        id
        label
        tag
      }
    }
  }
`},42756:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query questions(
    $questionVariationId: String! = ""
    $org: String! = ""
    $itemsPerPage: Int = 50
    $page: Int = 1
  ) {
    questions(
      questionRequest: {
        variationId: $questionVariationId
        org: $org
        itemsPerPage: $itemsPerPage
        page: $page
      }
    ) {
      totalQuestions
    }
  }
`)},42840:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation UpdateReadbyConversation(
    $conversationId: String!
    $userId: String!
    $organization: String!
  ) {
    updateReadbyConversation(
      request: {
        conversationId: $conversationId
        organization: $organization
        fromUserRefKey: $userId
      }
    ) {
      ... on ChatConversationResponse {
        id
        unreadFromCount
        toUser {
          refKey
          fullName
        }
        lastInteractionAt
      }
    }
  }
`},42914:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment general on RatingInformation {
    rating
    reviewCount
    commentCount
  }
`)},44030:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query UnreadCountCustomerMessage($request: UnreadCountCustomerMessageRequest!) {
    unreadCountCustomerMessage(request: $request) {
      ... on UnreadCountCustomerMessageResponse {
        value
        type
      }
      ... on ChatErrorResponse {
        message
        slug
        stack
        detail {
          msg
          loc
        }
      }
    }
  }
`},45518:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment installment on Installment {
    paymentMethodId
    paymentMethodDescription
    quantity
    amount
    totalAmount
  }
`)},46210:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(10056)),o=a(r(68237));t.default=(0,n.default)`
  query showcaseQuery(
    $showcaseId: String
    $customerId: String
    $placeId: String
    $pageId: String
    $partnerId: String
    $pmdPromoter: String
    $storeId: String
    $productId: String
    $filters: [FilterInput]
    $includePagination: Boolean = true
    $toggleWishlist: Boolean = true
    $zipcode: String
    $isSourceProductAds: Boolean = false
    $trackId: String
  ) {
    recommendation(
      recommendationRequest: {
        customerId: $customerId
        pageId: $pageId
        placeId: $placeId
        productId: $productId
        metadata: {
          partnerId: $partnerId
          trackId: $trackId
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
        }
        filters: $filters
        searchRequest: { location: { zipCode: $zipcode } }
        isSourceProductAds: $isSourceProductAds
      }
    ) {
      dynamic(showcaseId: $showcaseId) {
        id
        title
        type
        designTokenId
        products {
          ...product
          isOnWishlist @include(if: $toggleWishlist)
          shippingTag {
            cost
            time
            complement
          }
        }
        highlight {
          ...product
          shippingTag {
            cost
            time
            complement
          }
        }
        button {
          label
          action
        }
        pagination {
          ...showcasePagination @include(if: $includePagination)
        }
      }
    }
  }
  ${i.default}
  ${o.default}
`},46467:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment subcategory on ProductCategory {
    id
    name
  }
`)},46981:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation AddToItemList($body: ListItemInput!, $upsert: Boolean) {
    addToItemList(body: $body, upsert: $upsert) {
      payload {
        item {
          id
        }
      }
      status
      message
    }
  }
`},47898:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment posts_postItem on PostItem {
    id
    title
    subtitle
    slug
    publishedAt
    updatedAt
    categoryId
    categorySlug
    categoryTitle
    image {
      alt
      urls {
        default
        thumbnail
        small
        medium
        large
      }
    }
  }
`},48341:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment seo on ComponentBlogSeo {
    title
    description
  }
`},48503:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation CreateUserReviewSubmission($request: UserReviewSubmissionRequest) {
    createUserReviewSubmission(request: $request) {
      status
      msg
      description
    }
  }
`},50672:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(47898));t.default=(0,n.default)`
  fragment recommendations_blogRecommendations on BlogRecommendation {
    id
    title
    variation
    categoryId
    postIds
    link
    quantity
    blogCategoryId
    parentCategoryId
    theme {
      background
      card
    }
    posts {
      ...posts_postItem
    }
  }
  ${i.default}
`},52191:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment subcategory_itemSubcategory on ItemSubCategory {
    id
    name
    url
  }
`)},52443:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment categories on ItemCategory {
    id
    name
    url
    subcategories {
      id
      name
      url
    }
  }
`)},52516:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment productImportTaxesValue on ImportTaxProduct {
    icmsValue
    importTaxValue
    iofValue
  }
`},53619:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment productCategory on ProductCategory {
    id
    name
  }
`)},54094:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation cartMutation(
    $id: String
    $productId: String!
    $sellerId: String!
    $extensions: DataValue
    $quantity: String!
    $services: [String]
    $partnerId: String
    $customerId: String
    $separateSaleService: SeparateSaleServiceRequest
    $isLoyalty: Boolean
  ) {
    addToCart(
      cartRequest: {
        id: $id
        productId: $productId
        sellerId: $sellerId
        extensions: $extensions
        quantity: $quantity
        services: $services
        partnerId: $partnerId
        customerId: $customerId
        separateSaleService: $separateSaleService
        isLoyalty: $isLoyalty
      }
    ) {
      id
      status
      items {
        quantity
        sku
        seller
      }
    }
  }
`},54429:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query reviewQuery(
    $productId: String
    $reviewPage: Int = 1
    $reviewPageSize: Int
    $reviewSortType: String
    $reviewSortOrientation: String
  ) {
    review(
      reviewRequest: {
        id: $productId
        pagination: { page: $reviewPage, size: $reviewPageSize }
        sort: { type: $reviewSortType, orientation: $reviewSortOrientation }
      }
    ) {
      stats {
        count
        average
        distribution {
          value
          count
        }
        characteristics {
          label
          value
        }
      }
      reviews {
        title
        text
        rating
        recommended
        user {
          name
        }
        date
        characteristics {
          label
          value
        }
      }
      sorts {
        type
        orientation
        label
      }
      pagination {
        page
        pages
        size
        start
      }
    }
  }
`},55001:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation adsEventsMutation($input: [SendAdsEventsInput!]!) {
    sendAdsEvents(input: $input) {
      status
    }
  }
`},55002:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment financialServices on FinancialService {
    id
    description
    offers {
      campaignId
      description
      id
      price
      treeId
      wageCompensation {
        amount
        percentage
      }
    }
  }
`)},56377:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query GetNotifications(
    $channel: String!
    $organization: String!
    $customerRefKey: String!
    $startsAt: String = null
  ) {
    getNotifications(
      request: {
        channel: $channel
        organization: $organization
        filters: { customerRefKey: $customerRefKey, startsAt: $startsAt }
      }
    ) {
      ... on ChatErrorResponse {
        message
        slug
      }
      ... on ChatNotificationsResponse {
        conversationId
        fromUserId
        countMessagesNew
        resumeLastMessage
        dateLastMessage
      }
    }
  }
`},58134:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query seoDepartmentContent($categoryId: String!, $subCategoryId: String) {
    seoDepartmentContent(categoryId: $categoryId, subcategoryId: $subCategoryId) {
      h1
      faq {
        ...faq
      }
      linkList {
        href
        alt
        value
      }
      meta {
        ...meta_seoMeta
      }
      supportText {
        ...supportText
      }
    }
  }
  ${i.SeoFaqFragment}
  ${i.SeoMetaFragment}
  ${i.SeoSupportTextFragment}
`},60920:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
query($letter: String! = "a", $page: Int = 1, $pageSize: Int = 30) {
  brandList(brandListRequest: { letter: $letter, page: $page, pageSize: $pageSize }) {
    brands {
      slug
      letter
      brand
    }
    pageSize
    pages
    records
  }
}`)},60941:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(10056));t.default=(0,n.default)`
  query adsQuery(
    $metadata: MetadataInput!
    $banners: [AdsBannerInput!]
    $products: [AdsProductInput!]
    $zipcode: String
    $omitProductIds: [String!]
  ) {
    ads(
      input: {
        metadata: $metadata
        banners: $banners
        products: $products
        zipcode: $zipcode
        omitProductIds: $omitProductIds
      }
    ) {
      banners {
        campaignId
        redirectUrl
        imageUrl
        trackId
        slot
      }
      products {
        trackId
        campaignId
        slot
        product {
          ...product
        }
      }
      fillrates {
        eventId
        placement
        received {
          serverAdsAmount
        }
        requested {
          categories
          serverAdsAmount
          skus
        }
        slotId
      }
    }
  }
  ${i.default}
`},61016:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query seoPdpContent($productId: String = "") {
    seoPdpContent(productId: $productId) {
      ids {
        productId
      }
    }
  }
`},61288:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment brand on Brand {
    label
    slug
  }
`)},61956:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query searchQuery(
    $term: String = ""
    $filters: [FilterInput]
    $sortType: String
    $sortOrientation: String
    $page: Int
    $pageSize: Int = 10
    $zipCode: String
    $latitude: Float
    $longitude: Float
    $pmdPromoter: String
    $storeId: String
    $partnerId: String
    $sellerId: String
    $customerId: String
    $showUnavailable: Boolean = true
    $searchExperiment: String
    $alwaysShowSubcategoryFilters: Boolean = true
    $trackId: String = null
    $experiment: String
    $bypass: Boolean = false
    $pageName: String
    $userAgent: String
    $ignoreSpellCheck: Boolean = false
    $offerOptions: OfferOptionsInput
    $maxSellers: Int = 1
    $vehicleVersionId: String! = ""
    $pinnedProducts: [PinnedProductInput]
  ) {
    search(
      searchRequest: {
        query: $term
        pagination: { page: $page, size: $pageSize }
        filters: $filters
        pinnedProducts: $pinnedProducts
        sort: { type: $sortType, orientation: $sortOrientation }
        location: { zipCode: $zipCode, latitude: $latitude, longitude: $longitude }
        metadata: {
          partnerId: $partnerId
          sellerId: $sellerId
          showUnavailable: $showUnavailable
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
          customerId: $customerId
          searchExperiment: $searchExperiment
          alwaysShowSubcategoryFilters: $alwaysShowSubcategoryFilters
          trackId: $trackId
          maxSellers: $maxSellers
        }
        requestData: { userAgent: $userAgent, pageName: $pageName }
        experiment: { bypass: $bypass, name: $experiment }
        ignoreSpellCheck: $ignoreSpellCheck
      }
    ) {
      items {
        attributes {
          type
          label
          current
          values {
            variationId
            value
            path
            image
            available
          }
        }
        category {
          id
          name
          subcategories {
            id
          }
        }
        subcategory {
          id
          name
        }
        type
        id
        offerId
        image
        title
        reference
        available
        isBuyBox
        path
        tags
        minimumOrderQuantity
        carIsCompatible(vehicleVersionId: $vehicleVersionId)
        ads {
          sponsored
          trackId
          campaignId
        }
        offers(options: $offerOptions) {
          listPrice
          price
          bestInstallmentPlan {
            paymentMethodDescription
            totalAmount
            installmentAmount
            installment
          }
          bestPrice {
            totalAmount
            discount
            paymentMethodDescription
            paymentMethodId
          }
          badges {
            text
            imageUrl
          }
          currency
          discounts {
            discountPrice
            description
          }
          restrictions {
            maxCheckoutQuantity
            timerStartDate
            timerEndDate
          }
          seller {
            id
            stats {
              score
            }
            tags {
              discountType
              discountValue
              type
              version
            }
          }
        }
        rating {
          count
          score
        }
        shippingTag(
          shippingTagRequest: { location: { zipCode: $zipCode } },
          filters: $filters
        ) {
          source
          cost
          time
          complement
        }
        brand {
          label
          slug
        }
      }
      fastFilters {
        id
        label
        slug
        type
        values {
          id
          label
          slug
          type
          filterType
          icon
          selected
          url
          values
        }
      }
      filters {
        type
        slug
        label
        min
        max
        selectedMin
        selectedMax
        values {
          id
          slug
          label
          count
          position
          selected
          type
          values {
            id
            slug
            label
            count
            selected
            parent {
              id
              slug
              label
              count
            }
            values {
              id
              slug
              label
              count
              selected
              type
            }
          }
        }
      }
      pagination {
        page
        pages
        records
        size
        start
      }
      sorts {
        label
        selected
        type
        orientation
      }
      adsFillRate {
        eventId
        placement
        requested {
          serverAdsAmount
          clientAdsAmount
        }
        received {
          serverAdsAmount
        }
      }
      cardan
      term {
        raw
        refined
      }
      viewMode
      selection {
        description
        endDate
        label {
          action {
            value
          }
        }
      }
    }
  }
`)},62280:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment category on Category {
    id
    label
    title
    description
    meta {
      description
      seoBlock
      canonical
      titleAlias
    }
  }
`)},62742:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment sellerInfo on SellerInfoResponse {
    enabled
  }
`)},62886:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query allCategoriesQuery($storeId: String) {
    allCategories: category(
      categoryRequest: { metadata: { loyaltyParams: { storeId: $storeId } } }
    ) {
      label
      id
      description
    }
  }
`)},63410:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment financialServices_itemFinancialServices on FinancialService {
    id
    description
    offers {
      campaignId
      description
      id
      price
      treeId
      wageCompensation {
        amount
        percentage
      }
    }
  }
`)},64621:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(3247));t.default=(0,n.default)`
  query ImportTaxQuery($importTaxRequest: [ImportTaxRequest]) {
    importTax(importTaxRequest: $importTaxRequest) {
      id
      taxes {
        icmsPercentageRate
        importPercentageRate
        iofPercentageRate
        dolarExchangeRate
        totalValueImportTax
        totalValueICMS
        totalValueIOF
        discount
      }
      products {
        code
        productTaxes {
          realValue {
            ...productImportTaxes
          }
          dolarValue {
            ...productImportTaxes
          }
        }
      }
    }
  }
  ${i.default}
`},64752:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment pagination on Pagination {
    page
    pages
    records
    size
    start
  }
`},64953:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query ListConversations(
    $organization: String! = ""
    $channel: String! = ""
    $fromUser: String! = ""
    $toUser: String = ""
    $offset: Int = 0
    $limit: Int = 10
    $status: ChatConversationStatusEnum = OPENED
    $search: String = ""
  ) {
    listConversations(
      request: {
        organization: $organization
        filters: {
          status: $status
          fromUserRefKey: $fromUser
          toUserRefKey: $toUser
          channel: $channel
          displayName: $search
        }
        pagination: { offset: $offset, limit: $limit }
      }
    ) {
      ... on ChatPaginationResponse {
        results {
          id
          unreadFromCount
          toUser {
            refKey
            fullName
          }
          lastInteractionAt
          lastMessage {
            content
          }
        }
        meta {
          page {
            offset
            limit
          }
          links {
            previous
            next
          }
        }
      }
      ... on ChatErrorResponse {
        slug
        message
      }
    }
  }
`},65950:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query VehiclePartCompatibilityBySku(
    $brand: String = ""
    $model: String = ""
    $version: String = ""
    $year: Int = 0
    $skuProduct: String = ""
    $sellerId: String = ""
  ) {
    compatibilityV2(
      brand: $brand
      model: $model
      year: $year
      version: $version
      sellerId: $sellerId
      sku: $skuProduct
    ) {
      compatible
    }
  }
`},67634:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation SendAdsFillrateEvents($input: SendAdsFillrateEventsInput!) {
    sendAdsFillrateEvents(input: $input) {
      status
    }
  }
`},68237:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment showcasePagination on ShowCasePagination {
    cursor
    next
    previous
  }
`},68304:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query locationQuery($zipCode: String) {
    location(locationRequest: { zipCode: $zipCode }) {
      street
      state
      city
      latitude
      longitude
    }
  }
`)},69249:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment media on Media {
    audios
    images
    podcasts
    videos
  }
`)},69293:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteFromPreBasketMutation=t.UpdatePreBasketItemMutation=t.AddToPreBasketMutation=t.RemoveFromWishlist=t.CreateUserReviewSubmissionMutation=t.CreateQuestionMutation=t.ChatReadbyConversationMutation=t.ChatCreateMessageMutation=t.ChatCreateConversationMutation=t.ChangeFollowStatusMutation=t.AddProductReviewMutation=t.AdsEventsMutation=t.AddToWishlist=t.AddToCartMutation=t.AddLetMeKnowMutation=void 0;var n=r(99713);Object.defineProperty(t,"AddLetMeKnowMutation",{enumerable:!0,get:function(){return a(n).default}});var i=r(54094);Object.defineProperty(t,"AddToCartMutation",{enumerable:!0,get:function(){return a(i).default}});var o=r(29292);Object.defineProperty(t,"AddToWishlist",{enumerable:!0,get:function(){return a(o).default}});var u=r(55001);Object.defineProperty(t,"AdsEventsMutation",{enumerable:!0,get:function(){return a(u).default}});var l=r(11626);Object.defineProperty(t,"AddProductReviewMutation",{enumerable:!0,get:function(){return a(l).default}});var s=r(2507);Object.defineProperty(t,"ChangeFollowStatusMutation",{enumerable:!0,get:function(){return a(s).default}});var d=r(35093);Object.defineProperty(t,"ChatCreateConversationMutation",{enumerable:!0,get:function(){return a(d).default}});var c=r(1307);Object.defineProperty(t,"ChatCreateMessageMutation",{enumerable:!0,get:function(){return a(c).default}});var f=r(42840);Object.defineProperty(t,"ChatReadbyConversationMutation",{enumerable:!0,get:function(){return a(f).default}});var m=r(87628);Object.defineProperty(t,"CreateQuestionMutation",{enumerable:!0,get:function(){return a(m).default}});var p=r(48503);Object.defineProperty(t,"CreateUserReviewSubmissionMutation",{enumerable:!0,get:function(){return a(p).default}});var g=r(74772);Object.defineProperty(t,"RemoveFromWishlist",{enumerable:!0,get:function(){return a(g).default}});var y=r(46981);Object.defineProperty(t,"AddToPreBasketMutation",{enumerable:!0,get:function(){return a(y).default}});var _=r(16909);Object.defineProperty(t,"UpdatePreBasketItemMutation",{enumerable:!0,get:function(){return a(_).default}});var b=r(92680);Object.defineProperty(t,"DeleteFromPreBasketMutation",{enumerable:!0,get:function(){return a(b).default}})},70295:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query eligibleProductServicesQuery($request: EligibleProductServicesRequest!) {
    eligibleProductServices(request: $request) {
      eligible
      services {
        id
        integrationCode
        description
        supplier {
          cnpj
          name
          trandingName
          id
        }
        offers {
          id
          campaignId
          description
          integrationCode
          price
          validity
          validityType
          treeId
          wageCompensation {
            amount
            percentage
          }
          recommended
        }
      }
      product {
        customerUUID
        serviceSlug
        sellerId
        productSku
        productDescription
        productBrand
        productImageUrl
        orderId
        orderUUID
        subOrderId
        subOrderUUID
      }
    }
  }
`},71400:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment meta_seoMeta on ComponentPresentationMeta {
    title
    description
    canonical
    truePath
  }
`},72024:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment offers on Offer {
    sku
    price {
      paymentMethodDescription
      bestPrice
      fullPrice
      price
      currency
      discount
    }
    seller {
      ...seller
    }
  }
`)},72464:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(95402)),o=a(r(41104));t.default=(0,n.default)`
  query itemQuery(
    $itemId: ID!
    $includeTerms: Boolean = false
    $termsSize: Int = 20
    $offerOptions: OfferOptionsInput
    $maxSellers: Int
    $pageSellers: Int
    $zipcode: String
    $sellerId: String
  ) {
    item(
      id: $itemId
      maxSellers: $maxSellers
      pageSellers: $pageSellers
      zipcode: $zipcode
      sellerId: $sellerId
    ) {
      type
      id
      partNumber
      offerId
      image
      title
      description
      reference
      available
      isBuyBox
      path
      tags
      minimumOrderQuantity
      entity
      terms(termsSize: $termsSize) @include(if: $includeTerms)
      offers(options: $offerOptions) {
        ...offers_itemOffers
      }
      ...cardan_item
    }
  }
  ${i.default}
  ${o.default}
`},72740:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProductWithSellerFragment=t.ProductWithPaymentMethodFragment=t.ProductWithOffersFragment=t.ProductWithMediaFragment=t.ProductWithFinancialServices=t.ProductWithFactSheetFragment=t.ProductWithDimensionFragment=t.ProductWithBundleFragment=t.ProductWithBadgeFragment=t.ProductSubCategoryFragment=t.ProductShippingCostFragment=t.ProductRecommendationFragment=t.ProductRatingReviewsByRatingFragment=t.ProductRatingGeneralFragment=t.ProductRatingFragment=t.ProductPriceFragment=t.ProductLoyaltyFragment=t.ProductInstallmentFragment=t.ProductImportTaxesValueFragment=t.ProductImportTaxesFragment=t.ProductGeoLocTags=t.ProductCategoryFragment=t.ProductBrandFragment=t.ProductAttributesFragment=t.ProductAdsFragment=t.PaginationFragment=t.NewsletterFragment=t.ItemWithSubcategoryFragment=t.ItemWithRatingFragment=t.ItemWithOffersFragment=t.ItemWithMediaFragment=t.ItemWithFinancialServicesFragment=t.ItemWithFactSheetFragment=t.ItemWithDimensionFragment=t.ItemWithCategoryFragment=t.ItemWithCategoriesFragment=t.ItemWithCardanFragment=t.ItemWithBundleFragment=t.ItemWithBrandFragment=t.ItemWithAttributesFragment=t.ItemRecommendationFragment=t.HotLinksItemFragment=t.ChatMessageErrorFragment=t.ChatMessageFragment=t.CategoryFragment=t.BlogSeoFragment=t.BlogRecommendationsFragment=t.BlogPostFragment=t.BlogLinkListFragment=t.AllCategoriesMetaFragment=void 0,t.SeoSupportTextFragment=t.ShowcasePaginationFragment=t.SeoMetaFragment=t.SeoFaqFragment=t.SearchSelectionFragment=t.SearchProductFragment=t.SearchFiltersFragment=t.QuestionsSellerInfoFragment=t.QuestionsPaginationFragment=t.QuestionsItemFragment=t.ProductWithVariationsFragment=void 0;var n=r(39498);Object.defineProperty(t,"AllCategoriesMetaFragment",{enumerable:!0,get:function(){return a(n).default}});var i=r(11604);Object.defineProperty(t,"BlogLinkListFragment",{enumerable:!0,get:function(){return a(i).default}});var o=r(47898);Object.defineProperty(t,"BlogPostFragment",{enumerable:!0,get:function(){return a(o).default}});var u=r(50672);Object.defineProperty(t,"BlogRecommendationsFragment",{enumerable:!0,get:function(){return a(u).default}});var l=r(48341);Object.defineProperty(t,"BlogSeoFragment",{enumerable:!0,get:function(){return a(l).default}});var s=r(62280);Object.defineProperty(t,"CategoryFragment",{enumerable:!0,get:function(){return a(s).default}});var d=r(31545);Object.defineProperty(t,"ChatMessageFragment",{enumerable:!0,get:function(){return a(d).default}});var c=r(17329);Object.defineProperty(t,"ChatMessageErrorFragment",{enumerable:!0,get:function(){return a(c).default}});var f=r(26707);Object.defineProperty(t,"HotLinksItemFragment",{enumerable:!0,get:function(){return a(f).default}});var m=r(92672);Object.defineProperty(t,"ItemRecommendationFragment",{enumerable:!0,get:function(){return a(m).default}});var p=r(35410);Object.defineProperty(t,"ItemWithAttributesFragment",{enumerable:!0,get:function(){return a(p).default}});var g=r(83628);Object.defineProperty(t,"ItemWithBrandFragment",{enumerable:!0,get:function(){return a(g).default}});var y=r(81827);Object.defineProperty(t,"ItemWithBundleFragment",{enumerable:!0,get:function(){return a(y).default}});var _=r(95402);Object.defineProperty(t,"ItemWithCardanFragment",{enumerable:!0,get:function(){return a(_).default}});var b=r(52443);Object.defineProperty(t,"ItemWithCategoriesFragment",{enumerable:!0,get:function(){return a(b).default}});var v=r(99503);Object.defineProperty(t,"ItemWithCategoryFragment",{enumerable:!0,get:function(){return a(v).default}});var h=r(73113);Object.defineProperty(t,"ItemWithDimensionFragment",{enumerable:!0,get:function(){return a(h).default}});var $=r(76120);Object.defineProperty(t,"ItemWithFactSheetFragment",{enumerable:!0,get:function(){return a($).default}});var P=r(63410);Object.defineProperty(t,"ItemWithFinancialServicesFragment",{enumerable:!0,get:function(){return a(P).default}});var I=r(25465);Object.defineProperty(t,"ItemWithMediaFragment",{enumerable:!0,get:function(){return a(I).default}});var S=r(41104);Object.defineProperty(t,"ItemWithOffersFragment",{enumerable:!0,get:function(){return a(S).default}});var M=r(13246);Object.defineProperty(t,"ItemWithRatingFragment",{enumerable:!0,get:function(){return a(M).default}});var O=r(52191);Object.defineProperty(t,"ItemWithSubcategoryFragment",{enumerable:!0,get:function(){return a(O).default}});var j=r(22523);Object.defineProperty(t,"NewsletterFragment",{enumerable:!0,get:function(){return a(j).default}});var C=r(64752);Object.defineProperty(t,"PaginationFragment",{enumerable:!0,get:function(){return a(C).default}});var D=r(9875);Object.defineProperty(t,"ProductAdsFragment",{enumerable:!0,get:function(){return a(D).default}});var F=r(80750);Object.defineProperty(t,"ProductAttributesFragment",{enumerable:!0,get:function(){return a(F).default}});var Q=r(61288);Object.defineProperty(t,"ProductBrandFragment",{enumerable:!0,get:function(){return a(Q).default}});var q=r(53619);Object.defineProperty(t,"ProductCategoryFragment",{enumerable:!0,get:function(){return a(q).default}});var w=r(84159);Object.defineProperty(t,"ProductGeoLocTags",{enumerable:!0,get:function(){return a(w).default}});var R=r(3247);Object.defineProperty(t,"ProductImportTaxesFragment",{enumerable:!0,get:function(){return a(R).default}});var k=r(52516);Object.defineProperty(t,"ProductImportTaxesValueFragment",{enumerable:!0,get:function(){return a(k).default}});var B=r(45518);Object.defineProperty(t,"ProductInstallmentFragment",{enumerable:!0,get:function(){return a(B).default}});var T=r(30251);Object.defineProperty(t,"ProductLoyaltyFragment",{enumerable:!0,get:function(){return a(T).default}});var A=r(76292);Object.defineProperty(t,"ProductPriceFragment",{enumerable:!0,get:function(){return a(A).default}});var z=r(25306);Object.defineProperty(t,"ProductRatingFragment",{enumerable:!0,get:function(){return a(z).default}});var L=r(42914);Object.defineProperty(t,"ProductRatingGeneralFragment",{enumerable:!0,get:function(){return a(L).default}});var x=r(19195);Object.defineProperty(t,"ProductRatingReviewsByRatingFragment",{enumerable:!0,get:function(){return a(x).default}});var W=r(10056);Object.defineProperty(t,"ProductRecommendationFragment",{enumerable:!0,get:function(){return a(W).default}});var N=r(96036);Object.defineProperty(t,"ProductShippingCostFragment",{enumerable:!0,get:function(){return a(N).default}});var U=r(46467);Object.defineProperty(t,"ProductSubCategoryFragment",{enumerable:!0,get:function(){return a(U).default}});var E=r(33470);Object.defineProperty(t,"ProductWithBadgeFragment",{enumerable:!0,get:function(){return a(E).default}});var V=r(10395);Object.defineProperty(t,"ProductWithBundleFragment",{enumerable:!0,get:function(){return a(V).default}});var H=r(91681);Object.defineProperty(t,"ProductWithDimensionFragment",{enumerable:!0,get:function(){return a(H).default}});var K=r(77616);Object.defineProperty(t,"ProductWithFactSheetFragment",{enumerable:!0,get:function(){return a(K).default}});var G=r(55002);Object.defineProperty(t,"ProductWithFinancialServices",{enumerable:!0,get:function(){return a(G).default}});var J=r(69249);Object.defineProperty(t,"ProductWithMediaFragment",{enumerable:!0,get:function(){return a(J).default}});var Y=r(72024);Object.defineProperty(t,"ProductWithOffersFragment",{enumerable:!0,get:function(){return a(Y).default}});var X=r(14042);Object.defineProperty(t,"ProductWithPaymentMethodFragment",{enumerable:!0,get:function(){return a(X).default}});var Z=r(7140);Object.defineProperty(t,"ProductWithSellerFragment",{enumerable:!0,get:function(){return a(Z).default}});var ee=r(18773);Object.defineProperty(t,"ProductWithVariationsFragment",{enumerable:!0,get:function(){return a(ee).default}});var et=r(21058);Object.defineProperty(t,"QuestionsItemFragment",{enumerable:!0,get:function(){return a(et).default}});var er=r(87517);Object.defineProperty(t,"QuestionsPaginationFragment",{enumerable:!0,get:function(){return a(er).default}});var ea=r(62742);Object.defineProperty(t,"QuestionsSellerInfoFragment",{enumerable:!0,get:function(){return a(ea).default}});var en=r(29691);Object.defineProperty(t,"SearchFiltersFragment",{enumerable:!0,get:function(){return a(en).default}});var ei=r(6895);Object.defineProperty(t,"SearchProductFragment",{enumerable:!0,get:function(){return a(ei).default}});var eo=r(99362);Object.defineProperty(t,"SearchSelectionFragment",{enumerable:!0,get:function(){return a(eo).default}});var eu=r(39643);Object.defineProperty(t,"SeoFaqFragment",{enumerable:!0,get:function(){return a(eu).default}});var el=r(71400);Object.defineProperty(t,"SeoMetaFragment",{enumerable:!0,get:function(){return a(el).default}});var es=r(68237);Object.defineProperty(t,"ShowcasePaginationFragment",{enumerable:!0,get:function(){return a(es).default}});var ed=r(81903);Object.defineProperty(t,"SeoSupportTextFragment",{enumerable:!0,get:function(){return a(ed).default}})},73113:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment dimensions_itemDimensions on ItemDimension {
    depth
    height
    weight
    width
  }
`)},74772:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation removeFromWishlist($variationId: String!, $userId: String!) {
    removeFromWishlist(
      wishlistRequest: { userId: $userId, product: { id: $variationId } }
    ) {
      status
    }
  }
`},76120:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment factsheet_itemFactsheet on FactSheetItem {
    displayName
    position
    slug
    elements {
      keyName
      position
      slug
      elements {
        isHtml
        keyName
        position
        slug
        value
      }
    }
  }
`)},76136:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query seoSearchContent($term: String! = "") {
    seoSearchContent(query: $term) {
      id
      h1
      faq {
        ...faq
      }
      meta {
        ...meta_seoMeta
      }
      supportText {
        ...supportText
      }
    }
  }
  ${i.SeoFaqFragment}
  ${i.SeoMetaFragment}
  ${i.SeoSupportTextFragment}
`},76292:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment price on Price {
    paymentMethodDescription
    price
    fullPrice
    bestPrice
    discount
    currency
    exchangeRate
    idExchangeRate
    originalPriceForeign
  }
`)},77013:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query searchQuery(
    $term: String = ""
    $filters: [FilterInput]
    $sortType: String
    $sortOrientation: String
    $page: Int
    $pageSize: Int = 20
    $zipCode: String
    $latitude: Float
    $longitude: Float
    $pmdPromoter: String
    $storeId: String
    $partnerId: String
    $sellerId: String
    $customerId: String
    $showUnavailable: Boolean = true
    $searchExperiment: String
    $alwaysShowSubcategoryFilters: Boolean = true
    $toggleWishlist: Boolean = true
  ) {
    search(
      searchRequest: {
        query: $term
        pagination: { page: $page, size: $pageSize }
        filters: $filters
        sort: { type: $sortType, orientation: $sortOrientation }
        location: { zipCode: $zipCode, latitude: $latitude, longitude: $longitude }
        metadata: {
          partnerId: $partnerId
          sellerId: $sellerId
          showUnavailable: $showUnavailable
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
          customerId: $customerId
          searchExperiment: $searchExperiment
          alwaysShowSubcategoryFilters: $alwaysShowSubcategoryFilters
        }
      }
    ) {
      products {
        isOnWishlist @include(if: $toggleWishlist)
        type
      }
      sorts {
        label
        selected
        type
        orientation
      }
      pagination {
        page
        pages
        records
        start
        size
      }
    }
  }
`)},77206:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query CheckNotifications(
    $channel: String!
    $organization: String!
    $customerRefKey: String!
  ) {
    checkNotifications(
      request: {
        channel: $channel
        organization: $organization
        filters: { customerRefKey: $customerRefKey }
      }
    ) {
      ... on ChatErrorResponse {
        message
        slug
      }
      ... on ChatCheckNotificationsResponse {
        hasNotification
        hasNewMessages
        hasNewConversations
      }
    }
  }
`},77616:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment factsheet on FactSheet {
    displayName
    slug
    elements {
      keyName
      elements {
        keyName
        isHtml
        value
      }
    }
  }
`)},78152:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query seoDepartmentSubCategories($initialLetter: String, $page: Int, $pageSize: Int) {
    seoDepartmentSubCategories(
      initialLetter: $initialLetter
      page: $page
      pageSize: $pageSize
    ) {
      data {
        id
        h1
        categoryId
        subcategoryId
        meta {
          truePath
        }
      }
      totalCount
      page
      pageSize
      pageCount
    }
  }
`},78937:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query ecommHeader {
    ecommHeader {
      id
      createdAt
      updatedAt
      linksGroup {
        label
        href
        title
        linkList {
          id
          href
          value
          alt
        }
      }
    }
  }
`},80750:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
 fragment attributes on Attribute {
    type
    label
    value
    current
    values
  }
`)},81827:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment bundles_itemBundles on ItemBundle {
    id
    image
    price
    quantity
    reference
    title
    factsheet {
      ...factsheet_itemFactsheet
    }
    dimensions {
      ...dimensions_itemDimensions
    }
  }
`)},81903:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  fragment supportText on ComponentPresentationSupportText {
    preview
    content
    aiText
    useAiText
  }
`},82532:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query PromoterShowcase($storeId: Int) {
    promoterShowcase(storeId: $storeId) {
      avatar
      name
    }
  }
`},83628:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment brand_itemBrand on ItemBrand {
    label
    slug
  }
`)},84159:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment geoLocTags on Tag {
    title
    icon
  }
`)},85287:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query basketQuery($basketId: ID = "") {
    getBasket(basketId: $basketId) {
      id
      totals {
        itemsQuantity
      }
      items {
        sku
        quantity
        seller
        product {
          name
          sku
        }
        services {
          id
          description
        }
      }
    }
  }
`},87517:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment questionPagination on QuestionPagination {
    page
    totalPages
  }
`)},87628:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation createQuestion($questionRequest: QuestionMutationRequest!) {
    createQuestion(questionRequest: $questionRequest) {
      id
      question
    }
  }
`},90175:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(92672));t.default=(0,n.default)`
  query AdsBrands(
    $input: AdsBrandsInput!
    $zipcode: String
    $offerOptions: OfferOptionsInput
  ) {
    adsBrands(input: $input) {
      campaignId
      content {
        creatives
        headline
        subtitle
        buttonTitle
        logo
        subtitle
        buttonTitle
      }
      id
      items {
        id
        isAds
        ...item
      }
      sellerId
      slot
      template
      trackId
      type
    }
  }
  ${i.default}
`},91558:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  query breadcrumbQuery($categoryId: String!, $subCategoryId: String) {
    categoryContent(categoryId: $categoryId, subcategoryId: $subCategoryId) {
      breadcrumb {
        label
        categoryId
        subcategoryId
        meta {
          description
          canonical
          title
        }
      }
    }
  }
`},91681:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment dimensions on Dimension {
    height
    length
    weight
    width
  }`)},92672:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=a(r(35410)),o=a(r(83628)),u=a(r(99503)),l=a(r(41104)),s=a(r(13246)),d=a(r(52191));t.default=(0,n.default)`
  fragment item on Item {
    adsSellerId
    ads {
      id
      sponsored
    }
    attributes {
      ...attributes_itemAttributes
    }
    available
    brand {
      ...brand_itemBrand
    }
    parentMatchingUuid
    category {
      ...category_itemCategory
    }
    subcategory {
      ...subcategory_itemSubcategory
    }
    shippingTag(shippingTagRequest: { location: { zipCode: $zipcode } }) {
      cost
      time
      complement
    }
    id
    image
    offerId
    path
    title
    offers(options: $offerOptions) {
      ...offers_itemOffers
    }
    rating {
      ...rating_itemRating
    }
    tags
  }
  ${i.default}
  ${o.default}
  ${u.default}
  ${d.default}
  ${l.default}
  ${s.default}
`},92680:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation DeleteMultipleFromItemList(
    $productIds: [String!]!
    $type: ItemListType = pre_basket
  ) {
    deleteMultipleFromItemList(body: { productIds: $productIds, type: $type }) {
      message
      status
      payload {
        productIds
      }
    }
  }
`},92898:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423)),i=r(72740);t.default=(0,n.default)`
  query blogPostsListingQuery(
    $postIds: [ID]
    $blogCategoryId: String
    $withChildren: Boolean
    $page: Int = 1
    $pageSize: Int = 9
    $limit: Int
    $start: Int
  ) {
    blogPostsListing(
      postIds: $postIds
      categoryId: $blogCategoryId
      withChildren: $withChildren
      pagination: { page: $page, pageSize: $pageSize }
      limit: $limit
      start: $start
    ) {
      posts {
        ...posts_postItem
      }
      pagination {
        ...pagination
      }
    }
  }
  ${i.BlogPostFragment}
  ${i.PaginationFragment}
`},93640:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  query RetrieveProductKeySellingPointsQuery(
    $navigationId: ID! = ""
  ) {
    keySellingPoint(id: $navigationId) {
      navigationId
      items
    }
  }
`)},95402:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment cardan_item on Item {
    cardan
  }
`)},96036:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment shippingCost on BasicShippingCost {
    cost
    costDescription
  }
`)},96738:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||a(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(13521),t),n(r(72740),t),n(r(69293),t)},99362:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment selection on Selection {
    id
    name
    description
    endDate
  }
`)},99503:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,a(r(30423)).default)(`
  fragment category_itemCategory on ItemCategory {
    id
    name
    url
    subcategories {
      id
      name
      url
    }
  }
`)},99713:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=a(r(30423));t.default=(0,n.default)`
  mutation addLetMeKnowMutation(
    $sku: ID!
    $name: String!
    $email: String!
    $newsletter: Boolean
    $origin: String
  ) {
    addLetMeKnow(
      letMeKnowRequest: {
        sku: $sku
        name: $name
        email: $email
        newsletter: $newsletter
        origin: $origin
      }
    ) {
      status
    }
  }
`}}]);
//# sourceMappingURL=magalu-libs-bdebebb1-32fe2c23f8cb7e2a.js.map