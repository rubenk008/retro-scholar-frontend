// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Categorypage → Social Cards*
 */
export interface CategoryPageDocumentDataSocialCardsItem {
  /**
   * Social Card Image field in *Categorypage → Social Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.socialCards[].socialCardImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  socialCardImage: prismic.ImageField<never>;

  /**
   * Social Card Title field in *Categorypage → Social Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.socialCards[].socialCardTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardTitle: prismic.KeyTextField;

  /**
   * Social Card Description field in *Categorypage → Social Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.socialCards[].socialCardDescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardDescription: prismic.KeyTextField;
}

/**
 * Content for Categorypage documents
 */
interface CategoryPageDocumentData {
  /**
   * Category Name field in *Categorypage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.category_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  category_name: prismic.RichTextField;

  /**
   * Category Desc field in *Categorypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.category_desc
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_desc: prismic.KeyTextField /**
   * Meta Title field in *Categorypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.metaTitle
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Categorypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.metaDescription
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Social Cards field in *Categorypage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: category-page.socialCards[]
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialCards: prismic.GroupField<
    Simplify<CategoryPageDocumentDataSocialCardsItem>
  >;
}

/**
 * Categorypage document from Prismic
 *
 * - **API ID**: `category-page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CategoryPageDocumentData>,
    "category-page",
    Lang
  >;

type HomePageDocumentDataSlicesSlice =
  | HomepageHeroSlice
  | SingleHighlightedCategorySectionSlice
  | TopCategoriesSectionSlice;

/**
 * Item in *Homepage → Social Cards Facebook & Twitter*
 */
export interface HomePageDocumentDataSocialCardsItem {
  /**
   * Social Card Image field in *Homepage → Social Cards Facebook & Twitter*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.socialCards[].socialCardImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  socialCardImage: prismic.ImageField<never>;

  /**
   * Social Card Title field in *Homepage → Social Cards Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.socialCards[].socialCardTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardTitle: prismic.KeyTextField;

  /**
   * Social Card Description field in *Homepage → Social Cards Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.socialCards[].socialCardDescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardDescription: prismic.KeyTextField;
}

/**
 * Content for Homepage documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.metaTitle
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.metaDescription
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Social Cards Facebook & Twitter field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home-page.socialCards[]
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialCards: prismic.GroupField<
    Simplify<HomePageDocumentDataSocialCardsItem>
  >;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `home-page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home-page",
    Lang
  >;

/**
 * Item in *Menu → Menu Links*
 */
export interface MenuDocumentDataMenuLinksItem {
  /**
   * Menu Item Name field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].menuItemName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menuItemName: prismic.KeyTextField;

  /**
   * Menu Item Description field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].menuItemDesc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menuItemDesc: prismic.KeyTextField;

  /**
   * Menu Item Link field in *Menu → Menu Links*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].menuItemLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  menuItemLink: prismic.ContentRelationshipField<"category-page">;
}

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
  /**
   * Menu Title field in *Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menuTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menuTitle: prismic.KeyTextField;

  /**
   * Menu Links field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_links: prismic.GroupField<Simplify<MenuDocumentDataMenuLinksItem>>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;

type PageDocumentDataSlicesSlice = MediaColumnsSlice | TextRowSlice;

/**
 * Item in *Longreadpage → Social Cards - Facebook & Twitter*
 */
export interface PageDocumentDataSocialCardsItem {
  /**
   * Social Card Image field in *Longreadpage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.social_cards[].social_card_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  social_card_image: prismic.ImageField<never>;

  /**
   * Social Card Title field in *Longreadpage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.social_cards[].social_card_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  social_card_title: prismic.KeyTextField;

  /**
   * Social card description field in *Longreadpage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.social_cards[].social_card_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  social_card_description: prismic.KeyTextField;
}

/**
 * Content for Longreadpage documents
 */
interface PageDocumentData {
  /**
   * Title field in *Longreadpage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Category field in *Longreadpage*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.category
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category-page">;

  /**
   * main media field in *Longreadpage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.main_media
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_media: prismic.ImageField<"mobile" | "square">;

  /**
   * introduction field in *Longreadpage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.introduction
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  introduction: prismic.RichTextField;

  /**
   * first paragraph field in *Longreadpage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.first_paragraph
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  first_paragraph: prismic.RichTextField;

  /**
   * Slice Zone field in *Longreadpage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Page
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Longreadpage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: My title for Search Engine
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Longreadpage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: The description that will appear in search engine
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Social Cards - Facebook & Twitter field in *Longreadpage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.social_cards[]
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_cards: prismic.GroupField<Simplify<PageDocumentDataSocialCardsItem>>;
}

/**
 * Longreadpage document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type QuizDocumentDataSlicesSlice = QuizCardSlice;

/**
 * Content for quiz documents
 */
interface QuizDocumentData {
  /**
   * title field in *quiz*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *quiz*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<QuizDocumentDataSlicesSlice> /**
   * Meta Description field in *quiz*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: quiz.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *quiz*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *quiz*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: quiz.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * quiz document from Prismic
 *
 * - **API ID**: `quiz`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuizDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<QuizDocumentData>, "quiz", Lang>;

type StoryPageDocumentDataSlicesSlice = StorySlideSlice;

/**
 * Item in *Storypage → Social Cards - Facebook & Twitter*
 */
export interface StoryPageDocumentDataSocialCardsItem {
  /**
   * Social Card Image field in *Storypage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.socialCards[].socialCardImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  socialCardImage: prismic.ImageField<never>;

  /**
   * Social Card Title field in *Storypage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.socialCards[].socialCardTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardTitle: prismic.KeyTextField;

  /**
   * Social Card Description field in *Storypage → Social Cards - Facebook & Twitter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.socialCards[].socialCardDescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socialCardDescription: prismic.KeyTextField;
}

/**
 * Content for Storypage documents
 */
interface StoryPageDocumentData {
  /**
   * Title field in *Storypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Category field in *Storypage*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category-page">;

  /**
   * Slice Zone field in *Storypage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<StoryPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Storypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.metaTitle
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Storypage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.metaDescription
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescription: prismic.KeyTextField;

  /**
   * Social Cards - Facebook & Twitter field in *Storypage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: story-page.socialCards[]
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialCards: prismic.GroupField<
    Simplify<StoryPageDocumentDataSocialCardsItem>
  >;
}

/**
 * Storypage document from Prismic
 *
 * - **API ID**: `story-page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StoryPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<StoryPageDocumentData>,
    "story-page",
    Lang
  >;

export type AllDocumentTypes =
  | CategoryPageDocument
  | HomePageDocument
  | MenuDocument
  | PageDocument
  | QuizDocument
  | StoryPageDocument;

/**
 * Primary content in *HomepageHero → Items*
 */
export interface HomepageHeroSliceDefaultItem {
  /**
   * Article field in *HomepageHero → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.items[].article
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article: prismic.ContentRelationshipField<"story-page" | "page">;
}

/**
 * Default variation for HomepageHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: HomepageHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomepageHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HomepageHeroSliceDefaultItem>
>;

/**
 * Slice variation for *HomepageHero*
 */
type HomepageHeroSliceVariation = HomepageHeroSliceDefault;

/**
 * HomepageHero Shared Slice
 *
 * - **API ID**: `homepage_hero`
 * - **Description**: HomepageHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomepageHeroSlice = prismic.SharedSlice<
  "homepage_hero",
  HomepageHeroSliceVariation
>;

/**
 * Primary content in *MediaRow → Items*
 */
export interface MediaColumnsSliceDefaultItem {
  /**
   * Media field in *MediaRow → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media_columns.items[].media
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  media: prismic.ImageField<never>;
}

/**
 * Default variation for MediaRow Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MediaColumnsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MediaColumnsSliceDefaultItem>
>;

/**
 * Slice variation for *MediaRow*
 */
type MediaColumnsSliceVariation = MediaColumnsSliceDefault;

/**
 * MediaRow Shared Slice
 *
 * - **API ID**: `media_columns`
 * - **Description**: MediaColumns
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MediaColumnsSlice = prismic.SharedSlice<
  "media_columns",
  MediaColumnsSliceVariation
>;

/**
 * Primary content in *QuizCard → Primary*
 */
export interface QuizCardSliceDefaultPrimary {
  /**
   * image field in *QuizCard → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz_card.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * question field in *QuizCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz_card.primary.question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * correct answer field in *QuizCard → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz_card.primary.correctAnswer
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  correctAnswer: prismic.SelectField<"A" | "B" | "C" | "D">;

  /**
   * explanation field in *QuizCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz_card.primary.explanation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  explanation: prismic.KeyTextField;
}

/**
 * Primary content in *QuizCard → Items*
 */
export interface QuizCardSliceDefaultItem {
  /**
   * option field in *QuizCard → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quiz_card.items[].option
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  option: prismic.KeyTextField;
}

/**
 * Default variation for QuizCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuizCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuizCardSliceDefaultPrimary>,
  Simplify<QuizCardSliceDefaultItem>
>;

/**
 * Slice variation for *QuizCard*
 */
type QuizCardSliceVariation = QuizCardSliceDefault;

/**
 * QuizCard Shared Slice
 *
 * - **API ID**: `quiz_card`
 * - **Description**: QuizCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuizCardSlice = prismic.SharedSlice<
  "quiz_card",
  QuizCardSliceVariation
>;

/**
 * Primary content in *SingleHighlightedCategorySection → Primary*
 */
export interface SingleHighlightedCategorySectionSliceDefaultPrimary {
  /**
   * Collection Title field in *SingleHighlightedCategorySection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_highlighted_category_section.primary.collectionTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  collectionTitle: prismic.KeyTextField;

  /**
   * Category Link field in *SingleHighlightedCategorySection → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: single_highlighted_category_section.primary.categoryLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  categoryLink: prismic.ContentRelationshipField<"category-page">;
}

/**
 * Primary content in *SingleHighlightedCategorySection → Items*
 */
export interface SingleHighlightedCategorySectionSliceDefaultItem {
  /**
   * Article field in *SingleHighlightedCategorySection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: single_highlighted_category_section.items[].article
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article: prismic.ContentRelationshipField<"story-page" | "page">;
}

/**
 * Default variation for SingleHighlightedCategorySection Slice
 *
 * - **API ID**: `default`
 * - **Description**: SingleHighlightedCategorySection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleHighlightedCategorySectionSliceDefault =
  prismic.SharedSliceVariation<
    "default",
    Simplify<SingleHighlightedCategorySectionSliceDefaultPrimary>,
    Simplify<SingleHighlightedCategorySectionSliceDefaultItem>
  >;

/**
 * Slice variation for *SingleHighlightedCategorySection*
 */
type SingleHighlightedCategorySectionSliceVariation =
  SingleHighlightedCategorySectionSliceDefault;

/**
 * SingleHighlightedCategorySection Shared Slice
 *
 * - **API ID**: `single_highlighted_category_section`
 * - **Description**: SingleHighlightedCategorySection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleHighlightedCategorySectionSlice = prismic.SharedSlice<
  "single_highlighted_category_section",
  SingleHighlightedCategorySectionSliceVariation
>;

/**
 * Primary content in *StorySlide → Items*
 */
export interface StorySlideSliceDefaultItem {
  /**
   * Heading field in *StorySlide → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slide.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Caption field in *StorySlide → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slide.items[].caption
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  caption: prismic.KeyTextField;

  /**
   * Caption position desktop field in *StorySlide → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Left Top
   * - **API ID Path**: story_slide.items[].caption_position
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  caption_position: prismic.SelectField<
    "Left Top" | "Right Top" | "Right Bottom" | "Left Bottom",
    "filled"
  >;

  /**
   * Caption position mobile field in *StorySlide → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Bottom
   * - **API ID Path**: story_slide.items[].caption_position_mobile
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  caption_position_mobile: prismic.SelectField<"Bottom" | "Top", "filled">;

  /**
   * Caption Color field in *StorySlide → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Blue
   * - **API ID Path**: story_slide.items[].caption_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  caption_color: prismic.SelectField<"Blue" | "Pink", "filled">;

  /**
   * Media field in *StorySlide → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slide.items[].media
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  media: prismic.ImageField<"mobile" | "square">;

  /**
   * Slide Duration field in *StorySlide → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: 5
   * - **API ID Path**: story_slide.items[].slideDuration
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  slideDuration: prismic.NumberField;

  /**
   * Thumbnail Precentage From Center field in *StorySlide → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slide.items[].thumbnailPrecentageFromCenter
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  thumbnailPrecentageFromCenter: prismic.KeyTextField;
}

/**
 * Default variation for StorySlide Slice
 *
 * - **API ID**: `default`
 * - **Description**: StorySlide
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StorySlideSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<StorySlideSliceDefaultItem>
>;

/**
 * Slice variation for *StorySlide*
 */
type StorySlideSliceVariation = StorySlideSliceDefault;

/**
 * StorySlide Shared Slice
 *
 * - **API ID**: `story_slide`
 * - **Description**: StorySlide
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StorySlideSlice = prismic.SharedSlice<
  "story_slide",
  StorySlideSliceVariation
>;

/**
 * Primary content in *TextRow → Primary*
 */
export interface TextRowSliceDefaultPrimary {
  /**
   * body field in *TextRow → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_row.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for TextRow Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextRowSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextRowSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextRow*
 */
type TextRowSliceVariation = TextRowSliceDefault;

/**
 * TextRow Shared Slice
 *
 * - **API ID**: `text_row`
 * - **Description**: TextRow
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextRowSlice = prismic.SharedSlice<
  "text_row",
  TextRowSliceVariation
>;

/**
 * Primary content in *TopCategoriesSection → Primary*
 */
export interface TopCategoriesSectionSliceDefaultPrimary {
  /**
   * Section Title field in *TopCategoriesSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_categories_section.primary.sectionTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionTitle: prismic.KeyTextField;
}

/**
 * Primary content in *TopCategoriesSection → Items*
 */
export interface TopCategoriesSectionSliceDefaultItem {
  /**
   * Category Thumbnail field in *TopCategoriesSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top_categories_section.items[].categoryThumbnail
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  categoryThumbnail: prismic.ImageField<never>;

  /**
   * Category Name field in *TopCategoriesSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_categories_section.items[].categoryName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  categoryName: prismic.KeyTextField;

  /**
   * Category Link field in *TopCategoriesSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: top_categories_section.items[].categoryLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  categoryLink: prismic.ContentRelationshipField<"category-page">;
}

/**
 * Default variation for TopCategoriesSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: TopCategoriesSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopCategoriesSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TopCategoriesSectionSliceDefaultPrimary>,
  Simplify<TopCategoriesSectionSliceDefaultItem>
>;

/**
 * Slice variation for *TopCategoriesSection*
 */
type TopCategoriesSectionSliceVariation = TopCategoriesSectionSliceDefault;

/**
 * TopCategoriesSection Shared Slice
 *
 * - **API ID**: `top_categories_section`
 * - **Description**: TopCategoriesSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopCategoriesSectionSlice = prismic.SharedSlice<
  "top_categories_section",
  TopCategoriesSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CategoryPageDocument,
      CategoryPageDocumentData,
      CategoryPageDocumentDataSocialCardsItem,
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      HomePageDocumentDataSocialCardsItem,
      MenuDocument,
      MenuDocumentData,
      MenuDocumentDataMenuLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocumentDataSocialCardsItem,
      QuizDocument,
      QuizDocumentData,
      QuizDocumentDataSlicesSlice,
      StoryPageDocument,
      StoryPageDocumentData,
      StoryPageDocumentDataSlicesSlice,
      StoryPageDocumentDataSocialCardsItem,
      AllDocumentTypes,
      HomepageHeroSlice,
      HomepageHeroSliceDefaultItem,
      HomepageHeroSliceVariation,
      HomepageHeroSliceDefault,
      MediaColumnsSlice,
      MediaColumnsSliceDefaultItem,
      MediaColumnsSliceVariation,
      MediaColumnsSliceDefault,
      QuizCardSlice,
      QuizCardSliceDefaultPrimary,
      QuizCardSliceDefaultItem,
      QuizCardSliceVariation,
      QuizCardSliceDefault,
      SingleHighlightedCategorySectionSlice,
      SingleHighlightedCategorySectionSliceDefaultPrimary,
      SingleHighlightedCategorySectionSliceDefaultItem,
      SingleHighlightedCategorySectionSliceVariation,
      SingleHighlightedCategorySectionSliceDefault,
      StorySlideSlice,
      StorySlideSliceDefaultItem,
      StorySlideSliceVariation,
      StorySlideSliceDefault,
      TextRowSlice,
      TextRowSliceDefaultPrimary,
      TextRowSliceVariation,
      TextRowSliceDefault,
      TopCategoriesSectionSlice,
      TopCategoriesSectionSliceDefaultPrimary,
      TopCategoriesSectionSliceDefaultItem,
      TopCategoriesSectionSliceVariation,
      TopCategoriesSectionSliceDefault,
    };
  }
}
