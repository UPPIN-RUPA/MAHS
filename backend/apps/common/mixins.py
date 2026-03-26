class ActiveQueryMixin:
    def get_active_queryset(self, queryset):
        return queryset.filter(is_active=True)
