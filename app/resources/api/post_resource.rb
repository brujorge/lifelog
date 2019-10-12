class Api::PostResource < JSONAPI::Resource
  attributes :body, :created_at

  def self.default_sort
    [{field: "created_at", direction: :desc}]
  end
end