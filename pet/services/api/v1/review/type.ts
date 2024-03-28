export interface SellerReview {
    id: string;
    reviewer_id: string;
    reviewee_id: string;
    rating_score: number;
    description: string;
    comment_records: any[];
    time: string;
}

export interface ISubmitReviewPayload {
    reviewer_id: string;
    reviewee_id: string;
    rating_score: number;
    description: string;
}

export interface IReviewQueryParams {
    review_id: string;
}
