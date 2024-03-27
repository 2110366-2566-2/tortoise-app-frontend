export interface SellerReview {
    id: string;
    reviewer_id: string;
    reviewee_id: string;
    rating_score: number;
    description: string;
    comment_records: any[];
    time: string;
}
